const docgen = require('react-docgen-typescript');
const fs = require('fs');
const path = require('path');

const DOCGEN_OPTIONS = {
  savePropValueAsString: true,
};

const IGNORE_PATHS = [
  'docs',
  'node_modules',
  'dist',
  '__stories__',
  '__tests__',
  '.git',
];
const ROOT_DIR = './../';
const SIDEBAR_PATH = path.join('./', 'sidebar-components.json');
const DOCS_DIR = './docs/';
const COMPONENT_DOCS_FOLDER_NAME = 'components';
const DOCS_PATH = path.join(DOCS_DIR, COMPONENT_DOCS_FOLDER_NAME);
// Check if the docs path exists, if not, create it
if (!fs.existsSync(DOCS_PATH)) fs.mkdirSync(DOCS_PATH);

const generateDocs = async () => {
  // Load components directory
  // Go into each folder and find matching files (TSX)
  let files = [];
  let sidebarNames = [];
  const getFiles = (file = '', folder) => {
    //ignore files if necessary
    if (IGNORE_PATHS.includes(file)) return;
    const filePath = path.join(folder ? folder : ROOT_DIR, file);
    let isFolder = false;
    try {
      isFolder = fs.lstatSync(filePath).isDirectory();
    } catch (e) {
      console.log('couldnt parse file', e);
    }
    if (isFolder) {
      const folderContents = fs.readdirSync(filePath);
      folderContents.map((name) => {
        const getFolderFiles = getFiles(name, filePath);
        return getFolderFiles;
      });
    }

    // Handle file
    // Check if TSX
    if (file.includes('tsx')) {
      files = [...files, filePath];
    }
  };

  getFiles();

  console.log('📁 the files', files);

  // Run docgen on each file
  const docs = files.map((filePath) => {
    // Get the path of the README
    // Check for MD and MDX
    // Assume it's same folder or
    // Assume it's one folder above component (in root, above src)
    // Default to local folder
    // MDX takes precedence over MD
    let markdown;
    const markdownSplitPath = filePath.split('/');
    markdownSplitPath.pop();
    const markdownLocalFolder = markdownSplitPath.join('/');
    markdownSplitPath.pop();
    const markdownRootFolder = markdownSplitPath.join('/');

    const markdownRootPath = path.join(markdownRootFolder, 'README.md');
    const markdownLocalPath = path.join(markdownLocalFolder, 'README.md');
    const mdxRootPath = path.join(markdownRootFolder, 'README.mdx');
    const mdxLocalPath = path.join(markdownLocalFolder, 'README.mdx');
    if (fs.existsSync(markdownRootPath))
      markdown = fs.readFileSync(markdownRootPath, 'utf-8');
    if (fs.existsSync(mdxRootPath))
      markdown = fs.readFileSync(mdxRootPath, 'utf-8');
    if (fs.existsSync(markdownLocalPath))
      markdown = fs.readFileSync(markdownLocalPath, 'utf-8');
    if (fs.existsSync(mdxLocalPath))
      markdown = fs.readFileSync(mdxLocalPath, 'utf-8');

    const doc = docgen.parse(filePath, DOCGEN_OPTIONS);
    return {
      markdown,
      doc,
    };
  });
  console.log('⚛️ generated docs', docs);

  // Loop through final JSON and generate MDX content
  // Create MDX files in specified folder (defaults to /components)
  // Add page title
  // Import props into Props Table component
  docs.forEach(({ markdown, doc }) => {
    if (doc.length < 1) return;
    // Add to sidebar
    sidebarNames = [
      ...sidebarNames,
      `${COMPONENT_DOCS_FOLDER_NAME}/${doc[0].displayName}`,
    ];

    // Handle MDX file creation
    const mdxPath = path.join(DOCS_PATH, `${doc[0].displayName}.mdx`);
    console.log('✍️ creating file', mdxPath);
    const description = doc[0].description ? doc[0].description : undefined;
    const propsTable = `import PropsTable from './PropsTable';

# Props

<PropsTable
  propMetaData={${JSON.stringify(doc[0].props, null, 2)}} 
/>`;
    // Create array of content
    // Filter out blank content
    // Then join array into a single text block
    const mdxContent = [markdown, description, propsTable]
      .filter(Boolean)
      .join('\n\n');

    fs.writeFileSync(mdxPath, mdxContent);
  });

  // Update sidebars with new components
  // Get sidebar file contents
  const sidebar = fs.writeFileSync(
    SIDEBAR_PATH,
    JSON.stringify(sidebarNames, null, 2),
  );

  // Replace files
};

generateDocs();
