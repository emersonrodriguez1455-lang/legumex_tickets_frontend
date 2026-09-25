// Lista de usuarios.
// V: valores de la lógica (src/logic/valores).
import React from 'react';
import { T, S, L } from '../utils/runtime.js';

export default function Usuarios({ V }) {
  return (
    <>
      {" "}
      <div>
        {" "}
        <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "16px" }}>
          {" "}
          <button onClick={V["onHeaderBack"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "flexShrink": "0", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpm scp4">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            {"Volver al listado"}
          </button>
          {" "}
          <button onClick={V["onNewUser"]} style={{ "marginLeft": "auto", "flexShrink": "0", "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "10px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp1h scpv">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)" }}>
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            {"Nuevo usuario"}
          </button>
          {" "}
        </div>
        {" "}
        <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "overflow": "hidden" }}>
          {" "}
          <div style={{ "display": "grid", "gridTemplateColumns": "minmax(0,2fr) 132px minmax(140px,180px) 150px", "gap": "16px", "alignItems": "center", "padding": "10px 16px", "background": "#f5f5f5", "borderBottom": "1px solid #e5e5e5", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
            {" "}
            <span>
              {"USUARIO"}
            </span>
            <span>
              {"ROL"}
            </span>
            <span>
              {"CARGA ACTIVA"}
            </span>
            <span>
              {"ACCESO"}
            </span>
            {" "}
          </div>
          {" "}
          <div style={{ "maxHeight": "calc(100vh - 400px)", "minHeight": "96px", "overflowY": "auto", "overscrollBehavior": "contain" }}>
            {" "}
            {V["loading"] ? (<>
              {" "}
              {L(V["ghostRows"]).map((_g_53, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <div style={{ "display": "grid", "gridTemplateColumns": "minmax(0,2fr) 132px minmax(140px,180px) 150px", "gap": "16px", "alignItems": "center", "padding": "12px 16px", "borderBottom": "1px solid #e5e5e5" }}>
                    {" "}
                    <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "minWidth": "0" }}>
                      {" "}
                      <span style={{ "display": "block", "width": "32px", "height": "32px", "borderRadius": "9999px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                      {" "}
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "flex": "1", "minWidth": "0" }}>
                        {" "}
                        <span style={{ "display": "block", "width": S(_g_53?.["w"]), "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                        {" "}
                        <span style={{ "display": "block", "width": "58%", "height": "11px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <span style={{ "display": "block", "width": "78px", "height": "22px", "borderRadius": "9999px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                    {" "}
                    <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "minWidth": "0" }}>
                      {" "}
                      <span style={{ "display": "block", "width": "100%", "height": "6px", "borderRadius": "9999px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                      {" "}
                      <span style={{ "display": "block", "width": "48%", "height": "11px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                      {" "}
                    </div>
                    {" "}
                    <span style={{ "display": "block", "width": "72px", "height": "30px", "borderRadius": "8px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                    {" "}
                  </div>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
            </>) : null}
            {" "}
            {L(V["userRows"]).map((_u_54, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div style={{ "display": "grid", "gridTemplateColumns": "minmax(0,2fr) 132px minmax(140px,180px) 150px", "gap": "16px", "alignItems": "center", "padding": "12px 16px", "borderBottom": "1px solid #e5e5e5" }}>
                  {" "}
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "minWidth": "0" }}>
                    {" "}
                    <div style={{ "width": "32px", "height": "32px", "flexShrink": "0", "borderRadius": "9999px", "background": "#f5f5f5", "border": "1px solid " + S(_u_54?.["ring"]), "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                      {T(_u_54?.["ini"])}
                    </div>
                    {" "}
                    <div style={{ "minWidth": "0" }}>
                      {" "}
                      <div style={{ "display": "flex", "alignItems": "center", "gap": "6px", "minWidth": "0" }}>
                        <span style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": S(_u_54?.["nameInk"]), "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                          {T(_u_54?.["nombre"])}
                        </span>
                        {_u_54?.["inactive"] ? (<>
                          <span style={{ "flexShrink": "0", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "10px", "letterSpacing": "0.06em", "color": "#525252", "border": "1px solid #d4d4d4", "borderRadius": "9999px", "padding": "1px 7px" }}>
                            {"INACTIVO"}
                          </span>
                        </>) : null}
                      </div>
                      {" "}
                      <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                        {T(_u_54?.["email"])}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <span title={_u_54?.["rolNote"]} style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "9999px", "padding": "5px 10px", "fontSize": "12px", "fontWeight": "500", "color": "#171717", "justifySelf": "start" }}>
                    {" "}
                    <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(_u_54?.["rolDot"]) }}></span>
                    {T(_u_54?.["rol"])}{" "}
                  </span>
                  {" "}
                  <div style={{ "minWidth": "0" }}>
                    {" "}
                    <div style={{ "display": "flex", "alignItems": "baseline", "gap": "8px" }}>
                      {" "}
                      <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "14px", "color": "#171717" }}>
                        {T(_u_54?.["carga"])}
                      </span>
                      {" "}
                      {_u_54?.["hasLate"] ? (<>
                        {" "}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                          <path d="M12 9v4"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        {" "}
                      </>) : null}
                      {" "}
                    </div>
                    {" "}
                    <div style={{ "height": "6px", "borderRadius": "9999px", "background": "#f5f5f5", "marginTop": "5px", "overflow": "hidden" }}>
                      {" "}
                      <div style={{ "height": "6px", "borderRadius": "9999px", "background": S(_u_54?.["cargaBar"]), "width": S(_u_54?.["cargaWidth"]), "transition": "width var(--duration-base) var(--ease-standard)" }}></div>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ "fontSize": "11px", "color": S(_u_54?.["cargaNoteInk"]), "marginTop": "4px" }}>
                      {T(_u_54?.["cargaNote"])}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "10px" }}>
                    {" "}
                    {V["canToggleUser"] ? (<>
                    <button onClick={_u_54?.["toggle"]} disabled={_u_54?.["toggleOff"]} aria-label={_u_54?.["toggleLabel"]} title={_u_54?.["toggleLabel"]} style={{ "opacity": S(_u_54?.["toggleOp"]), "flexShrink": "0", "width": "40px", "height": "22px", "borderRadius": "9999px", "border": "1px solid " + S(_u_54?.["trackBorder"]), "background": S(_u_54?.["track"]), "padding": "2px", "cursor": S(_u_54?.["toggleCur"]), "display": "flex", "justifyContent": "flex-start", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp6">
                      {" "}
                      <span style={{ "width": "16px", "height": "16px", "borderRadius": "9999px", "background": "#ffffff", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transform": "translateX(" + S(_u_54?.["knob"]) + ")", "transition": "transform var(--duration-fast) var(--ease-standard)" }}></span>
                      {" "}
                    </button>
                    </>) : null}
                    {" "}
                    <button onClick={_u_54?.["edit"]} style={{ "justifySelf": "start", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "6px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp1i scp4">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,rotate(0deg) scale(1)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                      </svg>
                      {"Editar"}
                    </button>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
          {V["pgUsers"]?.["show"] ? (<>
            {" "}
            <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "16px", "padding": "10px 16px", "background": "#f5f5f5", "borderTop": "1px solid #e5e5e5" }}>
              {" "}
              <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
                {T(V["pgUsers"]?.["range"])}
              </span>
              {" "}
              <div style={{ "display": "flex", "gap": "8px" }}>
                {" "}
                <button onClick={V["pgUsers"]?.["prev"]} disabled={V["pgUsers"]?.["atStart"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "fontSize": "14px", "fontWeight": "500", "padding": "6px 12px", "cursor": S(V["pgUsers"]?.["prevCursor"]), "opacity": S(V["pgUsers"]?.["prevOpacity"]) }} className="scpl scp10">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  {"Anterior"}
                </button>
                {" "}
                <button onClick={V["pgUsers"]?.["next"]} disabled={V["pgUsers"]?.["atEnd"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "fontSize": "14px", "fontWeight": "500", "padding": "6px 12px", "cursor": S(V["pgUsers"]?.["nextCursor"]), "opacity": S(V["pgUsers"]?.["nextOpacity"]) }} className="scp1d scp10">
                  {"Siguiente"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </>) : null}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </>
  );
}
