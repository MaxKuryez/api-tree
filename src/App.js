import ItemTree from './components/itemTree/itemTree';
import { TreeProvider } from './context/treeData/treeData';
import { ErrorProvider } from './context/error/error';

function App() {
  return (
    <ErrorProvider>
      <TreeProvider>
        <ItemTree />
      </TreeProvider>
    </ErrorProvider>
  );
}

export default App;
