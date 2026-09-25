// Página de chat: lista de conversaciones y conversación abierta.
// V: valores de la lógica (src/logic/valores).
import { S } from '../utils/runtime.js';
import ChatLista from '../components/chat/ChatLista.jsx';
import ChatConversacion from '../components/chat/ChatConversacion.jsx';

export default function Chat({ V }) {
  return (
    <>
      {" "}
      <div ref={V["chatPageRef"]} style={{ "display": "grid", "gridTemplateColumns": S(V["chatCols"]), "height": "calc(100vh - 232px)", "minHeight": "420px", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "16px", "overflow": "hidden" }}>
        {" "}
        {V["chatShowList"] ? (<ChatLista V={V} />) : null}
        {" "}
        {V["chatShowRight"] ? (<ChatConversacion V={V} />) : null}
        {" "}
      </div>
      {" "}
    </>
  );
}
