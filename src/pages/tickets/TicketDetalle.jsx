// Detalle de un ticket.
// V: valores de la lógica (src/logic/valores).
import DetalleCabecera from '../../components/detalle/DetalleCabecera.jsx';
import DetalleCargando from '../../components/detalle/DetalleCargando.jsx';
import DetalleDescripcion from '../../components/detalle/DetalleDescripcion.jsx';
import DetalleActividad from '../../components/detalle/DetalleActividad.jsx';
import DetalleSituacion from '../../components/detalle/DetalleSituacion.jsx';
import DetalleAsignacion from '../../components/detalle/DetalleAsignacion.jsx';
import DetalleAdjuntos from '../../components/detalle/DetalleAdjuntos.jsx';

export default function TicketDetalle({ V }) {
  return (
    <>
      {" "}
      <div>
        {" "}
        <DetalleCabecera V={V} />
        {" "}
        {V["loading"] ? (<DetalleCargando V={V} />) : null}
        {" "}
        {V["loaded"] ? (<>
          {" "}
          <div data-detail-grid="" style={{ "display": "grid", "gridTemplateColumns": "minmax(0,1.7fr) minmax(260px,320px)", "gap": "16px", "alignItems": "start" }}>
            {" "}
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "minWidth": "0" }}>
              {" "}
              <DetalleDescripcion V={V} />
              {" "}
              <DetalleActividad V={V} />
              {" "}
            </div>
            {" "}
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "minWidth": "0" }}>
              {" "}
              <DetalleSituacion V={V} />
              {" "}
              {V["canAssign"] ? (<DetalleAsignacion V={V} />) : null}
              {" "}
              <DetalleAdjuntos V={V} />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </>) : null}
        {" "}
      </div>
      {" "}
    </>
  );
}
