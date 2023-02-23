import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

function GraphContainer() {
  return (
    <div>
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default GraphContainer;
