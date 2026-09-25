import React from 'react';
import { T, S, L, CSS } from './runtime.js';

// Interfaz. V = valores que entrega Component.renderVals() (src/logic.js).
export function renderTemplate(V) {
  return (
    <>
    {V["showLogin"] ? (<>
      <div data-login="" onMouseMove={V["onLoginMove"]} onMouseLeave={V["onLoginLeave"]} style={{ "position": "relative", "minHeight": "100vh", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "background": "#f4f5f1", "overflow": "hidden", "paddingBottom": "clamp(96px,22vh,220px)" }}>
        {" "}
        <div aria-hidden="true" data-curtain="" style={{ "position": "fixed", "inset": "0", "zIndex": "6", "pointerEvents": "none", "animation": "curtainDown 1500ms cubic-bezier(0.76,0,0.24,1) 1000ms both" }}>
          {" "}
          <div style={{ "position": "absolute", "inset": "0", "background": "#0b2a1e" }}></div>
          {" "}
          <svg viewBox="0 0 1280 120" preserveAspectRatio="none" style={{ "position": "absolute", "left": "0", "right": "0", "top": "calc(100% - 1px)", "width": "100%", "height": "clamp(80px,14vh,140px)", "display": "block" }}>
            <polygon points="0,0 1280,0 1280,60 1100,25 900,58 680,10 460,55 250,20 0,60" fill="#0b2a1e"></polygon>
          </svg>
          {" "}
          <div style={{ "position": "absolute", "inset": "0", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
            {" "}
            <img src="/marca/legumex-logo.png" alt="" style={{ "height": "clamp(72px,10vw,120px)", "width": "auto", "filter": "brightness(0) invert(1)", "animation": "curtainLogo 1000ms cubic-bezier(0.22,1,0.36,1) both" }} />
            {" "}
            <div style={{ "width": "120px", "height": "1px", "background": "rgba(255,255,255,0.25)", "overflow": "hidden" }}>
              <div style={{ "width": "100%", "height": "100%", "background": "#9bc96a", "transformOrigin": "left", "animation": "lineGrow 900ms cubic-bezier(0.65,0,0.35,1) 150ms both" }}></div>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div aria-hidden="true" data-sierra="" style={{ "position": "fixed", "inset": "0", "pointerEvents": "none", "overflow": "hidden" }}>
          {" "}
          <div style={{ "position": "absolute", "right": "18%", "bottom": "calc(clamp(140px,30vh,280px) - 70px)", "width": "clamp(180px,22vw,300px)", "aspectRatio": "1", "borderRadius": "9999px", "translate": "calc(var(--mx,0) * -6px) calc(var(--my,0) * -6px)", "transition": "translate 1200ms cubic-bezier(0.22,1,0.36,1)", "background": "radial-gradient(circle at 50% 50%,#eef2df 0%,#e6ecd2 55%,rgba(230,236,210,0) 72%)", "animation": "sunRise 2400ms cubic-bezier(0.22,1,0.36,1) 1700ms both,sunBreath 9s ease-in-out 4200ms infinite" }}></div>
          {" "}
          <div style={{ "position": "absolute", "left": "0", "bottom": "calc(clamp(140px,30vh,280px) - 40px)", "width": "200%", "height": "90px", "background": "radial-gradient(ellipse 18% 50% at 20% 50%,rgba(255,255,255,0.75),rgba(255,255,255,0) 70%),radial-gradient(ellipse 22% 45% at 65% 55%,rgba(255,255,255,0.6),rgba(255,255,255,0) 70%)", "animation": "sierraDrift 70s linear infinite", "zIndex": "1" }}></div>
          {" "}
          <div style={{ "position": "absolute", "left": "0", "top": "8%", "width": "200%", "height": "38%", "translate": "calc(var(--mx,0) * -10px) 0", "transition": "translate 1200ms cubic-bezier(0.22,1,0.36,1)", "background": "radial-gradient(ellipse 9% 22% at 12% 40%,rgba(255,255,255,0.9),rgba(255,255,255,0) 70%),radial-gradient(ellipse 13% 18% at 38% 62%,rgba(255,255,255,0.7),rgba(255,255,255,0) 70%),radial-gradient(ellipse 8% 20% at 71% 30%,rgba(255,255,255,0.85),rgba(255,255,255,0) 70%),radial-gradient(ellipse 11% 16% at 90% 58%,rgba(255,255,255,0.65),rgba(255,255,255,0) 70%)", "animation": "chartFade 1600ms var(--ease-standard) 1700ms both,sierraDrift 140s linear 1700ms infinite" }}></div>
          {" "}
        </div>
        {" "}
        <div aria-hidden="true" data-sierra="" style={{ "position": "fixed", "left": "0", "right": "0", "bottom": "0", "height": "clamp(140px,30vh,280px)", "pointerEvents": "none" }}>
          {" "}
          <div style={{ "position": "absolute", "inset": "-34% -48px -12px -48px", "overflow": "hidden", "translate": "calc(var(--mx,0) * -4px) calc(var(--my,0) * -1px)", "transition": "translate 900ms cubic-bezier(0.22,1,0.36,1)", "animation": "sierraRise 1400ms cubic-bezier(0.22,1,0.36,1) 1500ms both" }}>
            {" "}
            <svg viewBox="0 0 2560 240" preserveAspectRatio="none" style={{ "position": "absolute", "top": "0", "left": "0", "width": "200%", "height": "100%", "display": "block", "animation": "sierraDrift 200s linear infinite reverse" }}>
              <polygon points="0,240 0,90 140,55 300,85 430,30 600,70 760,20 920,65 1080,35 1280,90 1420,55 1580,85 1710,30 1880,70 2040,20 2200,65 2360,35 2560,90 2560,240" fill="#0b2a1e" fillOpacity="0.05"></polygon>
            </svg>
            {" "}
          </div>
          {" "}
          <div style={{ "position": "absolute", "inset": "0 -48px -12px -48px", "overflow": "hidden", "translate": "calc(var(--mx,0) * -8px) calc(var(--my,0) * -2px)", "transition": "translate 900ms cubic-bezier(0.22,1,0.36,1)", "animation": "sierraRise 1200ms cubic-bezier(0.22,1,0.36,1) 1500ms both" }}>
            {" "}
            <svg viewBox="0 0 2560 240" preserveAspectRatio="none" style={{ "position": "absolute", "top": "0", "left": "0", "width": "200%", "height": "100%", "display": "block", "animation": "sierraDrift 120s linear infinite" }}>
              <polygon points="0,240 0,60 170,10 340,50 520,0 700,45 870,4 1050,40 1190,12 1280,60 1280,60 1450,10 1620,50 1800,0 1980,45 2150,4 2330,40 2470,12 2560,60 2560,240" fill="#0b2a1e" fillOpacity="0.10"></polygon>
            </svg>
            {" "}
          </div>
          {" "}
          <div style={{ "position": "absolute", "inset": "0 -48px -12px -48px", "overflow": "hidden", "translate": "calc(var(--mx,0) * -16px) calc(var(--my,0) * -4px)", "transition": "translate 900ms cubic-bezier(0.22,1,0.36,1)", "animation": "sierraRise 1200ms cubic-bezier(0.22,1,0.36,1) 1620ms both" }}>
            {" "}
            <svg viewBox="0 0 2560 240" preserveAspectRatio="none" style={{ "position": "absolute", "top": "0", "left": "0", "width": "200%", "height": "100%", "display": "block", "animation": "sierraDrift 80s linear infinite reverse" }}>
              <polygon points="0,240 0,120 210,75 400,110 610,60 830,115 1020,80 1280,120 1280,120 1490,75 1680,110 1890,60 2110,115 2300,80 2560,120 2560,240" fill="#0b2a1e" fillOpacity="0.35"></polygon>
            </svg>
            {" "}
          </div>
          {" "}
          <div style={{ "position": "absolute", "inset": "0 -48px -12px -48px", "overflow": "hidden", "translate": "calc(var(--mx,0) * -28px) calc(var(--my,0) * -7px)", "transition": "translate 900ms cubic-bezier(0.22,1,0.36,1)", "animation": "sierraRise 1200ms cubic-bezier(0.22,1,0.36,1) 1740ms both" }}>
            {" "}
            <svg viewBox="0 0 2560 240" preserveAspectRatio="none" style={{ "position": "absolute", "top": "0", "left": "0", "width": "200%", "height": "100%", "display": "block", "animation": "sierraDrift 52s linear infinite" }}>
              <polygon points="0,240 0,180 250,140 460,175 680,130 900,172 1100,145 1280,180 1280,180 1530,140 1740,175 1960,130 2180,172 2380,145 2560,180 2560,240" fill="#0b2a1e" fillOpacity="1"></polygon>
            </svg>
            {" "}
          </div>
        </div>
        {" "}
        <div style={{ "position": "fixed", "zIndex": "1", "left": "clamp(24px,5vw,72px)", "right": "clamp(24px,5vw,72px)", "bottom": "max(16px,2.4vh)", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "#ffffff", "animation": "chartFade 800ms var(--ease-standard) 2400ms both" }}>
          <span>
            {"FROM GUATEMALA TO THE WORLD"}
          </span>
          <span style={{ "color": "#cfd8cc" }}>
            {"GROWING QUALITY · DELIVERING TRUST"}
          </span>
        </div>
        {" "}
        <div data-login-copy="" style={{ "position": "relative", "zIndex": "2", "flex": "1 1 480px", "padding": "clamp(20px,5vh,48px) clamp(24px,5vw,72px)", "display": "flex", "flexDirection": "column" }}>
          {" "}
          <img src="/marca/legumex-logo.png" alt="Agroindustria Legumex" style={{ "height": "clamp(44px,8vh,72px)", "width": "auto", "alignSelf": "flex-start", "animation": "chartFade 600ms var(--ease-standard) 1500ms both" }} />
          {" "}
          <div style={{ "paddingTop": "clamp(20px,7vh,64px)" }}>
            {" "}
            <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "letterSpacing": "0.12em", "color": "#525252", "display": "flex", "alignItems": "center", "gap": "12px", "animation": "dropIn 500ms var(--ease-standard) 1620ms both" }}>
              <span aria-hidden="true" style={{ "width": "28px", "height": "1px", "background": "#a3a3a3", "transformOrigin": "left", "animation": "lineGrow 700ms var(--ease-standard) 1620ms both" }}></span>
              {"EL TEJAR, CHIMALTENANGO · 14°38′N 90°47′W"}
            </div>
            {" "}
            <h2 style={{ "fontSize": "clamp(36px,min(6vw,9vh),76px)", "lineHeight": "0.98", "fontWeight": "800", "letterSpacing": "-0.045em", "color": "#0b2a1e", "margin": "22px 0 0", "display": "flex", "flexDirection": "column" }}>
              {" "}
              <span style={{ "display": "block", "overflow": "hidden", "paddingBottom": "0.06em" }}>
                <span style={{ "display": "block", "animation": "lineUp 900ms cubic-bezier(0.22,1,0.36,1) 1720ms both" }}>
                  {"Tickets"}
                </span>
              </span>
              {" "}
              <span style={{ "display": "block", "overflow": "hidden", "paddingBottom": "0.06em" }}>
                <span style={{ "display": "block", "color": "#4d7c2a", "animation": "lineUp 900ms cubic-bezier(0.22,1,0.36,1) 1840ms both" }}>
                  {"TIC"}
                </span>
              </span>
              {" "}
            </h2>
            {" "}
            <p style={{ "fontSize": "17px", "lineHeight": "1.55", "color": "#404040", "maxWidth": "440px", "margin": "22px 0 0", "textWrap": "pretty", "animation": "dropIn 600ms var(--ease-standard) 1800ms both" }}>
              {"Reportá lo que te frena y seguilo hasta que quede resuelto. Del campo a la planta, el mismo soporte."}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ "position": "relative", "zIndex": "2", "flex": "1 1 420px", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "clamp(16px,4vh,48px) 24px" }}>
          {" "}
          <div style={{ "width": "100%", "maxWidth": "420px", "background": "#ffffff", "borderRadius": "16px", "padding": "clamp(20px,4vh,32px)", "boxShadow": "0 1px 2px rgba(0,0,0,0.06),0 0 0 1px #e5e5e5,0 32px 64px -32px rgba(11,42,30,0.28)", "animation": "cardRise 900ms cubic-bezier(0.22,1,0.36,1) 1880ms both" }}>
            {" "}
            {V["loginTitleIdle"] ? (<>
              <h1 style={{ "fontSize": "clamp(28px,5vh,36px)", "lineHeight": "1.05", "fontWeight": "700", "letterSpacing": "-0.03em", "margin": "0 0 8px", "color": "#0b2a1e" }}>
                {"Iniciar sesión"}
              </h1>
            </>) : null}
            {" "}
            {V["loginOk"] ? (<>
              <h1 aria-live="polite" style={{ "fontSize": "clamp(28px,5vh,36px)", "lineHeight": "1.05", "fontWeight": "700", "letterSpacing": "-0.03em", "margin": "0 0 8px", "color": "#15803d", "display": "flex", "flexWrap": "wrap" }}>
                {L(V["okTitle"]).map((_l_0, $index) => (
                  <React.Fragment key={$index}>
                    <span style={{ "display": "inline-block", "whiteSpace": "pre", "animation": S(_l_0?.["anim"]) }}>
                      {T(_l_0?.["ch"])}
                    </span>
                  </React.Fragment>
                ))}
              </h1>
            </>) : null}
            {" "}
            <p style={{ "fontSize": "16px", "lineHeight": "1.5", "color": "#525252", "margin": "0 0 clamp(16px,3vh,28px)" }}>
              {T(V["loginHello"])}{". Entrá con tu correo institucional."}
            </p>
            {" "}
            {V["hasLoginError"] ? (<>
              {" "}
              <div style={{ "display": "flex", "gap": "8px", "alignItems": "flex-start", "background": "#fef3c7", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "12px", "marginBottom": "20px" }}>
                {" "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "marginTop": "2px" }}>
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                {" "}
                <div>
                  {" "}
                  <div style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717" }}>
                    {"No pudimos validar tus datos"}
                  </div>
                  {" "}
                  <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#262626" }}>
                    {T(V["loginError"])}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </>) : null}
            {" "}
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "20px", "animation": S(V["loginShake"]) }}>
              {" "}
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                {" "}
                <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                  {"Correo institucional"}
                </label>
                {" "}
                <input type="email" value={(V["email"] ?? "")} onChange={V["onEmail"]} placeholder={V["loginPh"]} style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "transition": "border-color 300ms ease,box-shadow 300ms ease", "boxShadow": S(V["fieldRing"]), "border": "1px solid " + S(V["fieldBorder"]), "borderRadius": "6px", "padding": "10px 12px", "fontSize": "14px", "outline": "none" }} />
                {" "}
              </div>
              {" "}
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                {" "}
                <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                  {"Contraseña"}
                </label>
                {" "}
                <div style={{ "position": "relative" }}>
                  {" "}
                  <input type={V["pwdType"]} value={(V["password"] ?? "")} onChange={V["onPassword"]} onKeyDown={V["onPwdKey"]} placeholder="••••••••" autoComplete="current-password" style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "transition": "border-color 300ms ease,box-shadow 300ms ease", "boxShadow": S(V["fieldRing"]), "border": "1px solid " + S(V["fieldBorder"]), "borderRadius": "6px", "padding": "10px 46px 10px 12px", "fontSize": "14px", "outline": "none" }} />
                  {" "}
                  <button type="button" onClick={V["onTogglePwd"]} aria-label={V["pwdLabel"]} aria-pressed={V["pwdShown"]} title={V["pwdLabel"]} style={{ "position": "absolute", "right": "4px", "top": "50%", "transform": "translateY(-50%)", "width": "36px", "height": "36px", "border": "none", "background": "transparent", "borderRadius": "6px", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#525252", "transition": "background-color 150ms ease,color 150ms ease" }} className="scp0">
                    {" "}
                    {V["pwdHidden"] ? (<>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </>) : null}
                    {" "}
                    {V["pwdShown"] ? (<>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                        <path d="M6.61 6.61A13.53 13.53 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                        <path d="m2 2 20 20"></path>
                      </svg>
                    </>) : null}
                    {" "}
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <button onClick={V["onLogin"]} aria-busy={V["loginBusy"]} style={{ "width": "100%", "minHeight": "44px", "pointerEvents": S(V["loginBtnPe"]), "animation": S(V["loginBtnAnim"]), "background": S(V["loginBtnBg"]), "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "12px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)" }} className="scp1 scp2">
                {V["loginIdle"] ? (<>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": S(V["tapLogin"]), "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)" }}>
                    <path d="m10 17 5-5-5-5"></path>
                    <path d="M15 12H3"></path>
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  </svg>
                  {"Iniciar sesión"}
                </>) : null}
                {" "}
                {V["loginChecking"] ? (<>
                  <span aria-hidden="true" style={{ "position": "relative", "display": "inline-block", "height": "16px", "flexShrink": "0" }}>
                    <img src="/marca/legumex-isotipo.png" alt="" style={{ "height": "16px", "width": "auto", "display": "block", "opacity": "0.28", "filter": "brightness(0) invert(1)" }} />
                    <img src="/marca/legumex-isotipo.png" alt="" style={{ "position": "absolute", "left": "0", "top": "0", "height": "16px", "width": "auto", "display": "block", "animation": "logoLoop 1100ms cubic-bezier(0.65,0,0.35,1) infinite", "filter": "brightness(0) invert(1)" }} />
                  </span>
                  {"Verificando…"}
                </>) : null}
                {" "}
                {V["loginOk"] ? (<>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                    <path d="M20 6 9 17l-5-5" style={{ "strokeDasharray": "26", "animation": "checkDraw 420ms cubic-bezier(0.22,1,0.36,1) both" }}></path>
                  </svg>
                  <span style={{ "display": "inline-flex" }}>
                    {L(V["okBtn"]).map((_l_1, $index) => (
                      <React.Fragment key={$index}>
                        <span style={{ "display": "inline-block", "whiteSpace": "pre", "animation": S(_l_1?.["anim"]) }}>
                          {T(_l_1?.["ch"])}
                        </span>
                      </React.Fragment>
                    ))}
                  </span>
                </>) : null}
              </button>
              {" "}
              {V["demoMode"] ? (<>
                <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "8px 12px", "flexWrap": "wrap", "borderTop": "1px solid #e5e5e5", "paddingTop": "16px" }}>
                  {" "}
                  <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "minWidth": "0", "whiteSpace": "nowrap" }}>
                    {"DEMO · cualquier clave"}
                  </span>
                  {" "}
                  <button onClick={V["onFillDemo"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "6px", "flexShrink": "0", "whiteSpace": "nowrap", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp3 scp4">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,rotate(0deg) scale(1)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                      <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path>
                      <path d="M8.5 2h7"></path>
                      <path d="M7 16h10"></path>
                    </svg>
                    {"Usar datos de prueba"}
                  </button>
                  {" "}
                </div>
              </>) : null}
              {" "}
            </div>
            {" "}
          </div>
        </div>
      </div>
    </>) : null}
    {V["showApp"] ? (<>
      <div aria-hidden="true" data-no-print="" data-sierra="" style={{ "position": "fixed", "left": "0", "right": "0", "bottom": "0", "height": "clamp(240px,42vh,420px)", "pointerEvents": "none", "zIndex": "0" }}>
        {" "}
        <div style={{ "position": "absolute", "inset": "0", "overflow": "hidden", "animation": "sierraRise 1200ms cubic-bezier(0.22,1,0.36,1) 0ms both" }}>
          {" "}
          <svg viewBox="0 0 2560 240" preserveAspectRatio="none" style={{ "position": "absolute", "top": "0", "left": "0", "width": "200%", "height": "100%", "display": "block", "animation": "sierraDrift 120s linear infinite" }}>
            <polygon points="0,240 0,60 170,10 340,50 520,0 700,45 870,4 1050,40 1190,12 1280,60 1280,60 1450,10 1620,50 1800,0 1980,45 2150,4 2330,40 2470,12 2560,60 2560,240" fill="#0b2a1e" fillOpacity="0.08"></polygon>
          </svg>
          {" "}
        </div>
        {" "}
        <div style={{ "position": "absolute", "inset": "0", "overflow": "hidden", "animation": "sierraRise 1200ms cubic-bezier(0.22,1,0.36,1) 120ms both" }}>
          {" "}
          <svg viewBox="0 0 2560 240" preserveAspectRatio="none" style={{ "position": "absolute", "top": "0", "left": "0", "width": "200%", "height": "100%", "display": "block", "animation": "sierraDrift 80s linear infinite reverse" }}>
            <polygon points="0,240 0,120 210,75 400,110 610,60 830,115 1020,80 1280,120 1280,120 1490,75 1680,110 1890,60 2110,115 2300,80 2560,120 2560,240" fill="#0b2a1e" fillOpacity="0.22"></polygon>
          </svg>
          {" "}
        </div>
        {" "}
        <div style={{ "position": "absolute", "inset": "0", "overflow": "hidden", "animation": "sierraRise 1200ms cubic-bezier(0.22,1,0.36,1) 240ms both" }}>
          {" "}
          <svg viewBox="0 0 2560 240" preserveAspectRatio="none" style={{ "position": "absolute", "top": "0", "left": "0", "width": "200%", "height": "100%", "display": "block", "animation": "sierraDrift 52s linear infinite" }}>
            <polygon points="0,240 0,180 250,140 460,175 680,130 900,172 1100,145 1280,180 1280,180 1530,140 1740,175 1960,130 2180,172 2380,145 2560,180 2560,240" fill="#0b2a1e" fillOpacity="0.42"></polygon>
          </svg>
          {" "}
        </div>
      </div>
      <div data-shell="" style={{ "position": "relative", "zIndex": "1", "display": "flex", "alignItems": "flex-start", "height": "100vh", "overflow": "hidden" }}>
        {" "}
        <aside style={{ "position": "relative", "width": "240px", "flexShrink": "0", "background": "transparent", "position": "sticky", "top": "0", "alignSelf": "flex-start", "height": "100vh", "overflowY": "auto", "borderRight": "none", "padding": "24px 12px 20px", "display": "flex", "flexDirection": "column", "gap": "28px" }}>
          {" "}
          <button onClick={V["onHome"]} aria-label="Ir al inicio" title="Ir al inicio" style={{ "alignSelf": "flex-start", "background": "transparent", "border": "none", "padding": "4px 8px", "margin": "0", "cursor": "pointer", "display": "flex", "alignItems": "center", "borderRadius": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp5 scp6">
            {" "}
            <img src="/marca/legumex-isotipo.png" alt="Agroindustria Legumex" style={{ "height": "34px", "width": "auto", "display": "block" }} />
            {" "}
          </button>
          {" "}
          <button onClick={V["onBell"]} aria-label={V["bellAria"]} aria-expanded={V["notifOpen"]} title="Notificaciones" style={{ "position": "absolute", "top": "24px", "right": "12px", "width": "44px", "height": "44px", "borderRadius": "10px", "border": "none", "background": S(V["bellBg"]), "boxShadow": S(V["bellShadow"]), "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp7 scp8">
            {" "}
            {V["bellPolling"] ? (<>
              <span aria-hidden="true" style={{ "position": "relative", "display": "inline-block", "height": "10px", "flexShrink": "0" }}>
                <img src="/marca/legumex-isotipo.png" alt="" style={{ "height": "10px", "width": "auto", "display": "block", "opacity": "0.28" }} />
                <img src="/marca/legumex-isotipo.png" alt="" style={{ "position": "absolute", "left": "0", "top": "0", "height": "10px", "width": "auto", "display": "block", "animation": "logoLoop 1100ms cubic-bezier(0.65,0,0.35,1) infinite" }} />
              </span>
            </>) : null}
            <svg display={V["bellSvgDisplay"]} width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transformOrigin": "50% 10%", "transform": "rotate(var(--ir,0deg)) scale(var(--ic,1))", "transition": "transform 240ms cubic-bezier(0.34,1.56,0.64,1)", "animation": S(V["bellAnim"]) }}>
              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
            </svg>
            {" "}
            {V["hasUnread"] ? (<>
              <span style={{ "position": "absolute", "top": "5px", "right": "5px", "minWidth": "18px", "height": "18px", "padding": "0 5px", "borderRadius": "9999px", "background": "#dc2626", "color": "#ffffff", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "fontWeight": "600", "lineHeight": "18px", "textAlign": "center", "boxShadow": "0 0 0 2px #f4f5f1", "animation": "badgePop 360ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
                {T(V["unreadLabel"])}
              </span>
            </>) : null}
            {" "}
          </button>
          {" "}
          <nav style={{ "position": "relative", "display": "flex", "flexDirection": "column", "gap": "4px" }}>
            {" "}
            {V["navPillOn"] ? (<>
              {" "}
              <span aria-hidden="true" style={{ "position": "absolute", "left": "0", "right": "0", "top": "0", "height": "44px", "borderRadius": "10px", "background": "#ffffff", "boxShadow": "0 1px 2px rgba(0,0,0,0.06),0 0 0 1px #e5e5e5", "transform": "translateY(" + S(V["navPillY"]) + ")", "transition": "transform var(--duration-fast) var(--ease-standard)", "pointerEvents": "none" }}></span>
              {" "}
            </>) : null}
            {" "}
            {L(V["navItems"]).map((_n_2, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <button onClick={_n_2?.["go"]} onMouseEnter={_n_2?.["onEnter"]} onMouseLeave={_n_2?.["onLeave"]} style={{ "position": "relative", "zIndex": "1", "height": "44px", "textAlign": "left", "border": "none", "background": "transparent", "color": S(_n_2?.["ink"]), "fontSize": "14px", "fontWeight": S(_n_2?.["weight"]), "padding": "0 8px", "borderRadius": "8px", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--nb,460ms) var(--ease-standard) var(--nbd,120ms),opacity var(--duration-fast) var(--ease-standard)" }} className="scp9 scpa">
                  {" "}
                  <span style={{ "display": "flex", "alignItems": "center", "gap": "8px", "minWidth": "0" }}>
                    {" "}
                    {_n_2?.["isTickets"] ? (<>
                      {" "}
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={_n_2?.["iconColor"]} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "strokeDasharray": "130", "animation": S(_n_2?.["anim"]), "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--nt,620ms) var(--ne,cubic-bezier(0.22,1,0.36,1)) var(--nd,180ms)" }}>
                        <path d="M22 12h-6l-2 3h-4l-2-3H2"></path>
                        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                      </svg>
                      {" "}
                    </>) : null}
                    {" "}
                    {_n_2?.["isCats"] ? (<>
                      {" "}
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={_n_2?.["iconColor"]} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "strokeDasharray": "130", "animation": S(_n_2?.["anim"]), "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--nt,620ms) var(--ne,cubic-bezier(0.22,1,0.36,1)) var(--nd,180ms)" }}>
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                        <path d="M7.5 7.5h.01"></path>
                      </svg>
                      {" "}
                    </>) : null}
                    {" "}
                    {_n_2?.["isUsers"] ? (<>
                      {" "}
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={_n_2?.["iconColor"]} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "strokeDasharray": "130", "animation": S(_n_2?.["anim"]), "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--nt,620ms) var(--ne,cubic-bezier(0.22,1,0.36,1)) var(--nd,180ms)" }}>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      {" "}
                    </>) : null}
                    {" "}
                    {_n_2?.["isChat"] ? (<>
                      {" "}
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={_n_2?.["iconColor"]} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "strokeDasharray": "130", "animation": S(_n_2?.["anim"]), "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--nt,620ms) var(--ne,cubic-bezier(0.22,1,0.36,1)) var(--nd,180ms)" }}>
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        <path d="M8 9h8"></path>
                        <path d="M8 13h5"></path>
                      </svg>
                      {" "}
                    </>) : null}
                    {" "}
                    {_n_2?.["isPulso"] ? (<>
                      {" "}
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={_n_2?.["pulseColor"]} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "strokeDasharray": "130", "animation": S(_n_2?.["anim"]), "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--nt,620ms) var(--ne,cubic-bezier(0.22,1,0.36,1)) var(--nd,180ms)" }}>
                        <path d="M2 12h3.5l2-6 3.5 12 2.5-8 1.8 4H22"></path>
                      </svg>
                      {" "}
                    </>) : null}
                    {" "}
                    <span>
                      {T(_n_2?.["label"])}
                    </span>
                    {" "}
                  </span>
                  {" "}
                  <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": S(_n_2?.["countColor"]) }}>
                    {T(_n_2?.["count"])}
                  </span>
                  {" "}
                </button>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </nav>
          {" "}
          <div style={{ "background": "#ffffff", "borderRadius": "16px", "boxShadow": "0 1px 2px rgba(0,0,0,0.06),0 0 0 1px #e5e5e5", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
            {" "}
            <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.12em", "display": "flex", "alignItems": "center", "gap": "12px" }}>
              <span aria-hidden="true" style={{ "width": "28px", "height": "1px", "background": "#a3a3a3", "flexShrink": "0" }}></span>
              {"EN TU BANDEJA"}
            </div>
            {" "}
            {V["vistaAdmin"] ? (<>
              {" "}
              <div role="group" aria-label="Qué tickets contar" style={{ "display": "flex", "gap": "2px", "padding": "3px", "background": "rgba(10,10,10,0.05)", "borderRadius": "8px" }}>
                {" "}
                {L(V["scopeOpts"]).map((_o_3, $index) => (
                  <React.Fragment key={$index}>
                    {" "}
                    <button onClick={_o_3?.["go"]} aria-pressed={_o_3?.["pressed"]} style={{ "flex": "1", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "gap": "6px", "height": "30px", "padding": "0 8px", "border": "none", "borderRadius": "6px", "background": S(_o_3?.["bg"]), "boxShadow": S(_o_3?.["shadow"]), "fontSize": "12px", "fontWeight": S(_o_3?.["weight"]), "color": "#171717", "cursor": "pointer", "whiteSpace": "nowrap", "transition": "background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)" }} className="scpb">
                      {T(_o_3?.["label"])}
                      <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252" }}>
                        {T(_o_3?.["count"])}
                      </span>
                    </button>
                    {" "}
                  </React.Fragment>
                ))}
                {" "}
              </div>
              {" "}
            </>) : null}
            {" "}
            <div style={{ "display": "flex", "alignItems": "baseline", "gap": "6px" }}>
              {" "}
              <span style={{ "fontSize": "40px", "lineHeight": "1", "fontWeight": "800", "letterSpacing": "-0.04em", "color": "#171717" }}>
                {T(V["inboxTotal"])}
              </span>
              {" "}
              <span style={{ "fontSize": "12px", "color": "#525252" }}>
                {"tickets"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "2px" }}>
              {" "}
              {L(V["inboxBreakdown"]).map((_b_4, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <button onClick={_b_4?.["go"]} aria-label={_b_4?.["aria"]} title={_b_4?.["aria"]} style={{ "display": "flex", "alignItems": "center", "gap": "8px", "width": "100%", "textAlign": "left", "background": S(_b_4?.["bg"]), "border": S(_b_4?.["border"]), "borderRadius": "8px", "padding": "6px 8px", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scpc scpd">
                    {" "}
                    <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(_b_4?.["dot"]), "flexShrink": "0" }}></span>
                    {" "}
                    <span style={{ "fontSize": "12px", "fontWeight": S(_b_4?.["weight"]), "color": "#525252", "minWidth": "0" }}>
                      {T(_b_4?.["label"])}
                    </span>
                    {" "}
                    <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "12px", "color": S(_b_4?.["countColor"]) }}>
                      {T(_b_4?.["count"])}
                    </span>
                    {" "}
                  </button>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
              {V["hasLate"] ? (<>
                {" "}
                <button onClick={V["onlyLate"]} title="Ver primero los tickets sin movimiento" style={{ "display": "flex", "alignItems": "center", "gap": "8px", "width": "100%", "textAlign": "left", "background": "#ffffff", "border": "1px solid #ea580c", "borderRadius": "8px", "padding": "6px 8px", "marginTop": "4px", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpe scpd">
                  {" "}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#ea580c)" }}>
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  {" "}
                  <span style={{ "fontSize": "12px", "fontWeight": "500", "color": "#171717", "minWidth": "0" }}>
                    {"Sin mover"}
                  </span>
                  {" "}
                  <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "12px", "color": "#171717" }}>
                    {T(V["lateCount"])}
                  </span>
                  {" "}
                </button>
                {" "}
              </>) : null}
              {" "}
              {V["hasNudged"] ? (<>
                {" "}
                <button onClick={V["onlyNudged"]} title="Los que el solicitante marcó como bloqueantes" style={{ "display": "flex", "alignItems": "center", "gap": "8px", "width": "100%", "textAlign": "left", "background": "#ffffff", "border": "1px solid #ea580c", "borderRadius": "8px", "padding": "6px 8px", "marginTop": "4px", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpe scpd">
                  {" "}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#ea580c)" }}>
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <path d="M4 22v-7"></path>
                  </svg>
                  {" "}
                  <span style={{ "fontSize": "12px", "fontWeight": "500", "color": "#171717", "minWidth": "0" }}>
                    {"Marcados como bloqueantes"}
                  </span>
                  {" "}
                  <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "12px", "color": "#171717" }}>
                    {T(V["nudgedCount"])}
                  </span>
                  {" "}
                </button>
                {" "}
              </>) : null}
              {" "}
              <span style={{ "fontSize": "11px", "color": "#525252", "padding": "2px 8px 0" }}>
                {T(V["inboxHint"])}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {V["showMisMetricas"] ? (<>
            {" "}
            <div style={{ "background": "#ffffff", "borderRadius": "16px", "boxShadow": "0 1px 2px rgba(0,0,0,0.06),0 0 0 1px #e5e5e5", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
              {" "}
              <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.12em", "display": "flex", "alignItems": "center", "gap": "12px" }}>
                <span aria-hidden="true" style={{ "width": "28px", "height": "1px", "background": "#a3a3a3", "flexShrink": "0" }}></span>
                {"CÓMO TE FUE"}
              </div>
              {" "}
              {L(V["misMetricas"]).map((_m_5, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <div style={{ "display": "flex", "alignItems": "baseline", "gap": "8px" }}>
                    {" "}
                    <span style={{ "fontSize": "12px", "color": "#525252", "minWidth": "0" }}>
                      {T(_m_5?.["label"])}
                    </span>
                    {" "}
                    <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "14px", "color": "#171717", "flexShrink": "0" }}>
                      {T(_m_5?.["valor"])}
                    </span>
                    {" "}
                    <span style={{ "fontSize": "11px", "color": "#525252", "flexShrink": "0" }}>
                      {"promedio"}
                    </span>
                    {" "}
                  </div>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
              {V["mmOverdue"] ? (<>
                {" "}
                <div style={{ "fontSize": "12px", "lineHeight": "1.43", "color": "#525252", "textWrap": "pretty" }}>
                  {"Tu ticket abierto lleva más que tu promedio."}
                </div>
                {" "}
              </>) : null}
              {" "}
            </div>
            {" "}
          </>) : null}
          {" "}
          <div style={{ "marginTop": "auto", "background": "#ffffff", "borderRadius": "16px", "boxShadow": "0 1px 2px rgba(0,0,0,0.06),0 0 0 1px #e5e5e5", "padding": "12px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
            {" "}
            <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 4px" }}>
              {" "}
              <div style={{ "width": "32px", "height": "32px", "borderRadius": "9999px", "background": "#ffffff", "border": "1px solid " + S(V["meRing"]), "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                {T(V["meIni"])}
              </div>
              {" "}
              <div style={{ "minWidth": "0" }}>
                {" "}
                <div style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                  {T(V["meNombre"])}
                </div>
                {" "}
                <div style={{ "fontSize": "11px", "color": "#737373" }}>
                  {T(V["meRol"])}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <button onClick={V["onLogout"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scpf scp4">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <path d="m16 17 5-5-5-5"></path>
                <path d="M21 12H9"></path>
              </svg>
              {"Cerrar sesión"}
            </button>
            {" "}
          </div>
          {" "}
        </aside>
        {" "}
        {V["notifOpen"] ? (<>
          {" "}
          <div data-no-print="" onClick={V["onBellClose"]} style={{ "position": "fixed", "inset": "0", "zIndex": "69" }}></div>
          {" "}
          <div data-no-print="" role="dialog" aria-label="Notificaciones" style={{ "position": "fixed", "left": "252px", "top": "20px", "zIndex": "70", "width": "380px", "maxWidth": "calc(100vw - 268px)", "maxHeight": "min(640px,calc(100vh - 40px))", "background": "#ffffff", "borderRadius": "16px", "boxShadow": "0 1px 2px rgba(0,0,0,0.06),0 0 0 1px #e5e5e5,0 24px 48px -24px rgba(11,42,30,0.3)", "display": "flex", "flexDirection": "column", "overflow": "hidden", "animation": "dockIn 220ms cubic-bezier(0.22,1,0.36,1) both" }}>
            {" "}
            <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "padding": "14px 16px", "borderBottom": "1px solid #e5e5e5" }}>
              {" "}
              <div style={{ "fontSize": "16px", "fontWeight": "700", "letterSpacing": "-0.02em", "color": "#171717" }}>
                {"Notificaciones"}
              </div>
              {" "}
              <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252" }}>
                {T(V["unreadNote"])}
              </span>
              {" "}
              {V["hasUnread"] ? (<>
                <button onClick={V["onReadAll"]} style={{ "marginLeft": "auto", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px 10px", "fontSize": "12px", "fontWeight": "500", "color": "#171717", "cursor": "pointer", "transition": "background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)" }} className="scpg scpb">
                  {"Marcar todo como leído"}
                </button>
              </>) : null}
              {" "}
            </div>
            {" "}
            <div style={{ "flex": "1", "minHeight": "0", "overflowY": "auto", "padding": "6px" }}>
              {" "}
              {L(V["notifs"]).map((_n_6, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <button onClick={_n_6?.["go"]} style={{ "width": "100%", "textAlign": "left", "display": "flex", "gap": "10px", "alignItems": "flex-start", "background": S(_n_6?.["bg"]), "border": "none", "borderRadius": "10px", "padding": "10px", "cursor": "pointer", "transition": "background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)" }} className="scpc scph">
                    {" "}
                    <span style={{ "width": "8px", "height": "8px", "borderRadius": "9999px", "background": S(_n_6?.["dot"]), "flexShrink": "0", "marginTop": "6px" }}></span>
                    {" "}
                    <span style={{ "display": "flex", "flexDirection": "column", "gap": "3px", "minWidth": "0", "flex": "1" }}>
                      {" "}
                      <span style={{ "display": "flex", "gap": "8px", "alignItems": "baseline" }}>
                        {" "}
                        <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "letterSpacing": "0.06em", "color": S(_n_6?.["kindColor"]) }}>
                          {T(_n_6?.["kind"])}
                        </span>
                        {" "}
                        <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252" }}>
                          {T(_n_6?.["code"])}
                        </span>
                        {" "}
                        <span style={{ "marginLeft": "auto", "fontSize": "11px", "color": "#525252", "flexShrink": "0" }}>
                          {T(_n_6?.["when"])}
                        </span>
                        {" "}
                      </span>
                      {" "}
                      <span style={{ "fontSize": "14px", "lineHeight": "1.4", "fontWeight": S(_n_6?.["weight"]), "color": "#171717", "textWrap": "pretty" }}>
                        {T(_n_6?.["title"])}
                      </span>
                      {" "}
                      <span style={{ "fontSize": "12px", "lineHeight": "1.45", "color": "#525252", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap" }}>
                        {T(_n_6?.["sub"])}
                      </span>
                      {" "}
                    </span>
                    {" "}
                  </button>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
              {V["noNotifs"] ? (<>
                <div style={{ "padding": "32px 16px", "textAlign": "center", "fontSize": "14px", "color": "#525252" }}>
                  {"Nada nuevo en tus tickets."}
                </div>
              </>) : null}
              {" "}
            </div>
            {" "}
            <div style={{ "padding": "10px 16px", "borderTop": "1px solid #e5e5e5", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252" }}>
              {"ÚLTIMAS 72 H · SE ACTUALIZA CADA 45 S"}
            </div>
            {" "}
          </div>
          {" "}
        </>) : null}
        {" "}
        <main data-sheet="" onScroll={V["onSheetScroll"]} style={{ "flex": "1", "minWidth": "0", "display": "flex", "flexDirection": "column", "background": S(V["sheetBg"]), "backdropFilter": S(V["sheetBlur"]), "WebkitBackdropFilter": S(V["sheetBlur"]), "transition": "background-color var(--duration-page) var(--ease-standard),box-shadow var(--duration-page) var(--ease-standard)", "borderRadius": "16px", "margin": "16px 16px 0 4px", "height": "calc(100vh - 32px)", "overflowY": S(V["sheetOverflow"]), "overscrollBehavior": "contain", "scrollbarGutter": "stable", "WebkitMaskImage": S(V["sheetMask"]), "maskImage": S(V["sheetMask"]), "boxShadow": S(V["sheetShadow"]) }}>
          {" "}
          {V["notList"] ? (<>
            {" "}
            <header data-no-print="" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "16px", "padding": "24px 28px 20px", "margin": "0 0 4px", "background": "rgba(244,245,241,0.9)", "backdropFilter": "blur(12px)", "WebkitBackdropFilter": "blur(12px)", "borderRadius": "12px", "borderRadius": "16px" }}>
              {" "}
              {V["notList"] ? (<>
                {" "}
                <div style={{ "flex": "1 1 320px", "minWidth": "min(280px,100%)", "display": "flex", "alignItems": "center" }}>
                  {" "}
                  <div style={{ "minWidth": "0" }}>
                    {" "}
                    <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#525252", "display": "flex", "alignItems": "center", "gap": "12px" }}>
                      <span aria-hidden="true" style={{ "width": "28px", "height": "1px", "background": "#a3a3a3", "flexShrink": "0" }}></span>
                      {T(V["crumb"])}
                    </div>
                    {" "}
                    <h1 style={{ "fontSize": "32px", "lineHeight": "1.05", "fontWeight": "800", "letterSpacing": "-0.04em", "margin": "10px 0 0", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                      {T(V["pageTitle"])}
                    </h1>
                    {" "}
                    {V["nudgedOnlyOn"] ? (<>
                      {" "}
                      <button onClick={V["onClearNudged"]} aria-label="Quitar filtro de bloqueantes" title="Quitar filtro" style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "height": "32px", "padding": "0 8px 0 10px", "background": "#fef3c7", "border": "1px solid #ea580c", "borderRadius": "9999px", "fontSize": "12px", "fontWeight": "500", "color": "#171717", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard)" }} className="scpb">
                        {"Solo bloqueantes"}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </button>
                      {" "}
                    </>) : null}
                    {" "}
                    <div style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "#525252", "marginTop": "6px", "textWrap": "pretty" }}>
                      {T(V["pageSub"])}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </>) : null}
              {" "}
              <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "flexShrink": "0", "flexWrap": "wrap", "justifyContent": "flex-end" }}>
                {" "}
                {V["showCsv"] ? (<>
                  {" "}
                  <button onClick={V["onExportCsv"]} title="Descarga lo que se ve en esta pantalla, separado por comas" style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "whiteSpace": "nowrap", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scpi scp4">
                    {" "}
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                    {"Exportar CSV "}
                  </button>
                  {" "}
                </>) : null}
                {" "}
                {V["hasSessionMsg"] ? (<>
                  {" "}
                  <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "background": "#f5f5f5", "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "11px", "color": "#525252", "whiteSpace": "nowrap", "animation": "dropIn var(--duration-base) var(--ease-standard) both" }}>
                    {" "}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                    {T(V["sessionMsg"])}{" "}
                  </span>
                  {" "}
                </>) : null}
                {" "}
                {V["canSwitchRole"] ? (<>
                  <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373" }}>
                    {"VER COMO"}
                  </span>
                  {" "}
                  <div style={{ "display": "flex", "gap": "4px", "background": "#f5f5f5", "borderRadius": "8px", "padding": "4px" }}>
                    {" "}
                    <button onClick={V["onRoleAdmin"]} style={{ "border": S(V["adminBorder"]), "background": S(V["adminBg"]), "color": "#171717", "fontSize": "14px", "fontWeight": "500", "padding": "6px 12px", "borderRadius": "6px", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp4">
                      {"Admin"}
                    </button>
                    {" "}
                    <button onClick={V["onRoleUser"]} style={{ "border": S(V["userBorder"]), "background": S(V["userBg"]), "color": "#171717", "fontSize": "14px", "fontWeight": "500", "padding": "6px 12px", "borderRadius": "6px", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp4">
                      {"Usuario"}
                    </button>
                    {" "}
                  </div>
                </>) : null}
                {" "}
              </div>
              {" "}
            </header>
            {" "}
          </>) : null}
          {" "}
          <div key={V["screenKey"]} style={{ "padding": "20px " + S(V["gridGutter"]) + " " + S(V["padBottom"]) + " 24px", "maxWidth": "1640px", "width": "100%", "animation": S(V["pageAnim"]) + " var(--duration-page) var(--ease-standard) both" }}>
            {" "}
            {V["show500"] ? (<>
              {" "}
              <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start", "background": "#fef3c7", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "16px", "marginBottom": "20px" }}>
                {" "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                {" "}
                <div style={{ "minWidth": "0" }}>
                  {" "}
                  <div style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717" }}>
                    {"No pudimos cargar los datos"}
                  </div>
                  {" "}
                  <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#262626" }}>
                    {"El servidor no respondió. Nada de lo que hiciste se perdió — volvé a intentar en unos segundos."}
                  </div>
                  {" "}
                  <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "marginTop": "6px", "letterSpacing": "0.02em" }}>
                    {T(V["err500Line"])}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ "marginLeft": "auto", "display": "flex", "gap": "8px", "flexShrink": "0" }}>
                  {" "}
                  <button onClick={V["onRetry"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "6px", "padding": "8px 12px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scpj scp4">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": S(V["tapRetry"]), "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                    </svg>
                    {"Reintentar"}
                  </button>
                  {" "}
                  <button onClick={V["onDismiss500"]} aria-label="Descartar aviso" title="Descartar aviso" style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "padding": "8px 10px", "display": "flex", "alignItems": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scpk scp4">
                    <svg style={{ "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </>) : null}
            {" "}
            {V["showForbidden"] ? (<>
              {" "}
              <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "64px 24px", "textAlign": "center" }}>
                {" "}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "margin": "0 auto 16px", "display": "block" }}>
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                {" "}
                <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "letterSpacing": "0.04em" }}>
                  {T(V["forbiddenCode"])}
                </div>
                {" "}
                <div style={{ "fontSize": "20px", "lineHeight": "1.4", "fontWeight": "600", "color": "#171717", "marginTop": "8px" }}>
                  {"No tenés permiso para ver esta sección"}
                </div>
                {" "}
                <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "marginTop": "4px", "maxWidth": "420px", "marginLeft": "auto", "marginRight": "auto", "textWrap": "pretty" }}>
                  {T(V["forbiddenMsg"])}
                </div>
                {" "}
                <button onClick={V["onBackToTickets"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "padding": "10px 16px", "marginTop": "20px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scpl scp4">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                    <path d="m12 19-7-7 7-7"></path>
                    <path d="M19 12H5"></path>
                  </svg>
                  {"Volver a mis tickets"}
                </button>
                {" "}
              </div>
              {" "}
            </>) : null}
            {" "}
            {V["showNotFound"] ? (<>
              {" "}
              <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "64px 24px", "textAlign": "center" }}>
                {" "}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "margin": "0 auto 16px", "display": "block" }}>
                  <path d="m13.5 8.5-5 5"></path>
                  <path d="m8.5 8.5 5 5"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                {" "}
                <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "letterSpacing": "0.04em" }}>
                  {"HTTP 404"}
                </div>
                {" "}
                <div style={{ "fontSize": "20px", "lineHeight": "1.4", "fontWeight": "600", "color": "#171717", "marginTop": "8px" }}>
                  {"Ticket no encontrado"}
                </div>
                {" "}
                <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "marginTop": "4px", "maxWidth": "420px", "marginLeft": "auto", "marginRight": "auto", "textWrap": "pretty" }}>
                  {T(V["notFoundMsg"])}
                </div>
                {" "}
                <button onClick={V["onBackToTickets"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "padding": "10px 16px", "marginTop": "20px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scpm scp4">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                    <path d="m12 19-7-7 7-7"></path>
                    <path d="M19 12H5"></path>
                  </svg>
                  {"Volver al listado"}
                </button>
                {" "}
              </div>
              {" "}
            </>) : null}
            {" "}
            {V["showList"] ? (<>
              {" "}
              <div>
                {" "}
                <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "stretch", "gap": "12px", "padding": "14px 0", "borderBottom": "1px solid #e5e5e5", "marginBottom": "12px", "position": "sticky", "top": "0", "zIndex": "24", "background": "rgba(244,245,241,0.95)", "boxShadow": "0 10px 24px -14px rgba(11,42,30,calc(0.35 * var(--fadeOn,0)))", "transition": "box-shadow 240ms ease", "backdropFilter": "blur(12px)", "WebkitBackdropFilter": "blur(12px)", "borderRadius": "12px", "paddingLeft": "12px", "paddingRight": "12px" }} className="scpn">
                  {" "}
                  <div style={{ "display": "flex", "alignItems": "center", "flexWrap": "wrap", "columnGap": "12px", "rowGap": "12px", "minHeight": "40px", "minWidth": "0" }}>
                    {" "}
                    <h1 title={V["pageTitle"]} style={{ "flex": "1", "minWidth": "0", "overflow": "hidden", "textOverflow": "ellipsis", "fontSize": "28px", "lineHeight": "40px", "fontWeight": "800", "letterSpacing": "-0.04em", "margin": "0", "color": "#171717", "whiteSpace": "nowrap" }}>
                      {T(V["pageTitle"])}
                    </h1>
                    {" "}
                    {V["ctlRow"] ? (<>
                      <span aria-hidden="true" style={{ "flexBasis": "100%", "height": "0" }}></span>
                    </>) : null}
                    {" "}
                    {V["ctlRow"] ? (<>
                      {" "}
                      <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "flexWrap": "wrap", "minWidth": "0" }}>
                        {" "}
                        {V["nudgedOnlyOn"] ? (<>
                          {" "}
                          <button onClick={V["onClearNudged"]} aria-label="Quitar filtro de bloqueantes" title="Quitar filtro" style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "height": "32px", "padding": "0 8px 0 10px", "background": "#fef3c7", "border": "1px solid #ea580c", "borderRadius": "9999px", "fontSize": "12px", "fontWeight": "500", "color": "#171717", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard)" }} className="scpb">
                            {"Solo bloqueantes"}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </button>
                          {" "}
                        </>) : null}
                        {" "}
                        {V["vistaAdmin"] ? (<>
                          {" "}
                          <div role="group" aria-label="Qué tickets ver" style={{ "display": "flex", "gap": "2px", "height": "40px", "boxSizing": "border-box", "padding": "3px", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px" }}>
                            {" "}
                            {L(V["scopeOpts"]).map((_o_7, $index) => (
                              <React.Fragment key={$index}>
                                {" "}
                                <button onClick={_o_7?.["go"]} aria-pressed={_o_7?.["pressed"]} style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "padding": "0 12px", "border": "none", "borderRadius": "5px", "background": S(_o_7?.["barBg"]), "fontSize": "14px", "fontWeight": S(_o_7?.["weight"]), "color": "#171717", "cursor": "pointer", "whiteSpace": "nowrap", "transition": "background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)" }} className="scpb">
                                  {T(_o_7?.["label"])}
                                  <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252" }}>
                                    {T(_o_7?.["count"])}
                                  </span>
                                </button>
                                {" "}
                              </React.Fragment>
                            ))}
                            {" "}
                          </div>
                          {" "}
                        </>) : null}
                        {" "}
                        {V["vistaAdmin"] ? (<>
                          {" "}
                          <div style={{ "position": "relative" }}>
                            {" "}
                            <button onClick={V["onTogglePeriod"]} aria-label="Cambiar período" title="Muestra los tickets creados en este período" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "height": "40px", "background": "#ffffff", "color": "#525252", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "0 10px 0 12px", "fontSize": "14px", "cursor": "pointer", "whiteSpace": "nowrap", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transition": "transform var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpo scpp">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                              </svg>
                              {"Creados en"}
                              <span style={{ "fontWeight": "600", "color": "#171717" }}>
                                {T(V["periodLabel"])}
                              </span>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </button>
                            {" "}
                            {V["periodOpen"] ? (<>
                              {" "}
                              <div onClick={V["onDismissPop"]} style={{ "position": "fixed", "inset": "0", "zIndex": "25" }}></div>
                              {" "}
                              <div role="dialog" aria-label="Período" style={{ "position": "absolute", "top": "calc(100% + 6px)", "zIndex": "30", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "boxShadow": "rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px", "animation": "dropIn var(--duration-base) var(--ease-standard) both", "left": "0", "width": "220px", "padding": "6px", "display": "flex", "flexDirection": "column", "gap": "2px" }}>
                                {" "}
                                {L(V["periodOpts"]).map((_p_8, $index) => (
                                  <React.Fragment key={$index}>
                                    {" "}
                                    <button onClick={_p_8?.["go"]} style={{ "display": "flex", "alignItems": "center", "gap": "8px", "width": "100%", "textAlign": "left", "background": S(_p_8?.["bg"]), "border": "none", "borderRadius": "8px", "padding": "8px 10px", "fontSize": "14px", "color": "#171717", "cursor": "pointer", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scpq scpr">
                                      {T(_p_8?.["label"])}
                                      {_p_8?.["on"] ? (<>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "marginLeft": "auto", "flexShrink": "0", "transform": "scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                                          <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                      </>) : null}
                                    </button>
                                    {" "}
                                  </React.Fragment>
                                ))}
                                {" "}
                              </div>
                              {" "}
                            </>) : null}
                            {" "}
                          </div>
                          {" "}
                          <div style={{ "position": "relative" }}>
                            {" "}
                            <button onClick={V["onToggleFilter"]} aria-label="Abrir filtros" title="Filtrar por estado y prioridad" style={{ "height": "40px", "boxSizing": "border-box", "background": S(V["filterBg"]), "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "whiteSpace": "nowrap", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scpi scp4">
                              {" "}
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                <path d="M3 6h18"></path>
                                <path d="M7 12h10"></path>
                                <path d="M10 18h4"></path>
                              </svg>
                              {"Filtro "}
                              {V["hasFilterCount"] ? (<>
                                {" "}
                                <span style={{ "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "minWidth": "18px", "height": "18px", "padding": "0 5px", "borderRadius": "9999px", "background": "#dbeaff", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#171717" }}>
                                  {T(V["filterCount"])}
                                </span>
                                {" "}
                              </>) : null}
                              {" "}
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                              {" "}
                            </button>
                            {" "}
                            {V["filterOpen"] ? (<>
                              {" "}
                              <div onClick={V["onDismissFilter"]} style={{ "position": "fixed", "inset": "0", "zIndex": "25" }}></div>
                              {" "}
                              <div role="dialog" aria-label="Filtros" style={{ "position": "absolute", "top": "calc(100% + 6px)", "left": "0", "zIndex": "30", "width": "288px", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "16px", "boxShadow": "rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px", "animation": "dropIn var(--duration-base) var(--ease-standard) both" }}>
                                {" "}
                                <div style={{ "display": "flex", "flexDirection": "column", "gap": "2px" }}>
                                  {" "}
                                  <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em", "marginBottom": "6px" }}>
                                    {"ESTADO"}
                                  </div>
                                  {" "}
                                  {L(V["statusFilters"]).map((_f_9, $index) => (
                                    <React.Fragment key={$index}>
                                      {" "}
                                      <button onClick={_f_9?.["go"]} style={{ "display": "flex", "alignItems": "center", "gap": "8px", "width": "100%", "textAlign": "left", "background": S(_f_9?.["bg"]), "border": "1px solid transparent", "borderRadius": "8px", "padding": "7px 8px", "cursor": "pointer", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scps scpt">
                                        {" "}
                                        {_f_9?.["hasDot"] ? (<>
                                          <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(_f_9?.["dot"]), "flexShrink": "0" }}></span>
                                        </>) : null}
                                        {" "}
                                        <span style={{ "fontSize": "14px", "color": "#171717", "minWidth": "0" }}>
                                          {T(_f_9?.["label"])}
                                        </span>
                                        {" "}
                                        <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "flexShrink": "0" }}>
                                          {T(_f_9?.["count"])}
                                        </span>
                                        {" "}
                                        {_f_9?.["on"] ? (<>
                                          {" "}
                                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#171717)" }}>
                                            <path d="M20 6 9 17l-5-5"></path>
                                          </svg>
                                          {" "}
                                        </>) : null}
                                        {" "}
                                      </button>
                                      {" "}
                                    </React.Fragment>
                                  ))}
                                  {" "}
                                </div>
                                {" "}
                                <div style={{ "display": "flex", "flexDirection": "column", "gap": "2px", "borderTop": "1px solid #e5e5e5", "paddingTop": "14px" }}>
                                  {" "}
                                  <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em", "marginBottom": "6px" }}>
                                    {"PRIORIDAD"}
                                  </div>
                                  {" "}
                                  {L(V["prioFilters"]).map((_p_10, $index) => (
                                    <React.Fragment key={$index}>
                                      {" "}
                                      <button onClick={_p_10?.["go"]} style={{ "display": "flex", "alignItems": "center", "gap": "8px", "width": "100%", "textAlign": "left", "background": S(_p_10?.["bg"]), "border": "1px solid transparent", "borderRadius": "8px", "padding": "7px 8px", "cursor": "pointer", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scps scpt">
                                        {" "}
                                        {_p_10?.["hasDot"] ? (<>
                                          <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(_p_10?.["dot"]), "flexShrink": "0" }}></span>
                                        </>) : null}
                                        {" "}
                                        <span style={{ "fontSize": "14px", "color": "#171717", "minWidth": "0" }}>
                                          {T(_p_10?.["label"])}
                                        </span>
                                        {" "}
                                        <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "flexShrink": "0" }}>
                                          {T(_p_10?.["count"])}
                                        </span>
                                        {" "}
                                        {_p_10?.["on"] ? (<>
                                          {" "}
                                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#171717)" }}>
                                            <path d="M20 6 9 17l-5-5"></path>
                                          </svg>
                                          {" "}
                                        </>) : null}
                                        {" "}
                                      </button>
                                      {" "}
                                    </React.Fragment>
                                  ))}
                                  {" "}
                                </div>
                                {" "}
                                <div style={{ "display": "flex", "gap": "8px", "borderTop": "1px solid #e5e5e5", "paddingTop": "14px" }}>
                                  {" "}
                                  <button onClick={V["onClearDraft"]} style={{ "flex": "1", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "gap": "6px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpu scp4">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                      <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"></path>
                                      <path d="m22 3-5 5"></path>
                                      <path d="m17 3 5 5"></path>
                                    </svg>
                                    {"Limpiar"}
                                  </button>
                                  {" "}
                                  <button onClick={V["onCloseFilter"]} style={{ "flex": "1", "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpv">
                                    {T(V["applyLabel"])}
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
                        </>) : null}
                        {" "}
                      </div>
                      {" "}
                    </>) : null}
                    {" "}
                    <div style={{ "marginLeft": "auto", "flexShrink": "0", "display": "flex", "alignItems": "center", "gap": "4px", "minWidth": "0" }}>
                      {" "}
                      {V["hasSessionMsg"] ? (<>
                        {" "}
                        <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "background": "#f5f5f5", "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "11px", "color": "#525252", "whiteSpace": "nowrap", "animation": "dropIn var(--duration-base) var(--ease-standard) both" }}>
                          {" "}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          </svg>
                          {T(V["sessionMsg"])}{" "}
                        </span>
                        {" "}
                      </>) : null}
                      {" "}
                      {V["searchClosed"] ? (<>
                        {" "}
                        <button onClick={V["onOpenSearch"]} aria-label="Buscar tickets" title="Buscar por título o código  ·  /" style={{ "background": "transparent", "color": "#171717", "border": "1px solid transparent", "borderRadius": "8px", "width": "40px", "height": "40px", "padding": "0", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scpw scp4">
                          {" "}
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                          </svg>
                          {" "}
                        </button>
                        {" "}
                      </>) : null}
                      {" "}
                      {V["searchOpen"] ? (<>
                        {" "}
                        <div style={{ "position": "relative", "width": "min(280px,34vw)", "minWidth": "160px", "animation": "searchGrow var(--duration-base) var(--ease-standard) both" }}>
                          {" "}
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "position": "absolute", "left": "11px", "top": "50%", "transform": "translateY(-50%)", "pointerEvents": "none" }}>
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                          </svg>
                          {" "}
                          <input id="tic-search" value={(V["q"] ?? "")} onChange={V["onQuery"]} onBlur={V["onBlurSearch"]} placeholder="Buscar por título o código" style={{ "width": "100%", "height": "40px", "boxSizing": "border-box", "background": "#ffffff", "color": "#111827", "border": "1px solid #000000", "borderRadius": "8px", "padding": "0 36px 0 36px", "fontSize": "14px", "outline": "none" }} />
                          {" "}
                          {V["hasQuery"] ? (<>
                            {" "}
                            <button onClick={V["onClearQuery"]} aria-label="Limpiar búsqueda" title="Limpiar búsqueda" style={{ "position": "absolute", "right": "6px", "top": "50%", "transform": "translateY(-50%)", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "6px", "padding": "3px", "cursor": "pointer", "display": "flex", "alignItems": "center", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scpx scpy">
                              <svg style={{ "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </button>
                            {" "}
                          </>) : null}
                          {" "}
                        </div>
                        {" "}
                      </>) : null}
                      {" "}
                      {V["vistaAdmin"] ? (<>
                        {" "}
                        <div style={{ "position": "relative" }}>
                          {" "}
                          <button onClick={V["onToggleView"]} aria-label="Vista y orden" title="Vista y orden" style={{ "background": S(V["viewBtnBg"]), "color": "#171717", "border": "1px solid transparent", "borderRadius": "8px", "width": "40px", "height": "40px", "padding": "0", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpz scp10">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                              <path d="M21 4h-7"></path>
                              <path d="M10 4H3"></path>
                              <path d="M21 12h-9"></path>
                              <path d="M8 12H3"></path>
                              <path d="M21 20h-5"></path>
                              <path d="M12 20H3"></path>
                              <path d="M14 2v4"></path>
                              <path d="M8 10v4"></path>
                              <path d="M16 18v4"></path>
                            </svg>
                          </button>
                          {" "}
                          {V["viewOpen"] ? (<>
                            {" "}
                            <div onClick={V["onDismissPop"]} style={{ "position": "fixed", "inset": "0", "zIndex": "25" }}></div>
                            {" "}
                            <div role="dialog" aria-label="Vista y orden" style={{ "position": "absolute", "top": "calc(100% + 6px)", "zIndex": "30", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "boxShadow": "rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px", "animation": "dropIn var(--duration-base) var(--ease-standard) both", "right": "0", "width": "260px", "padding": "14px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                              {" "}
                              <div>
                                {" "}
                                <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em", "marginBottom": "8px" }}>
                                  {"VISTA"}
                                </div>
                                {" "}
                                <div style={{ "display": "flex", "gap": "4px", "background": "#f5f5f5", "borderRadius": "8px", "padding": "4px" }}>
                                  {" "}
                                  <button onClick={V["onCards"]} title="Vista de tarjetas" aria-label="Vista de tarjetas" style={{ "border": S(V["cardsBorder"]), "background": S(V["cardsBg"]), "color": S(V["cardsIcon"]), "flex": "1", "justifyContent": "center", "padding": "7px 10px", "borderRadius": "6px", "cursor": "pointer", "boxShadow": S(V["cardsShadow"]), "display": "flex", "alignItems": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)" }} className="scp11 scp4">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "animation": S(V["tapCards"]), "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                                      <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                                      <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                                      <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                                      <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                                    </svg>
                                  </button>
                                  {" "}
                                  <button onClick={V["onTable"]} title="Vista de tabla" aria-label="Vista de tabla" style={{ "border": S(V["tableBorder"]), "background": S(V["tableBg"]), "color": S(V["tableIcon"]), "flex": "1", "justifyContent": "center", "padding": "7px 10px", "borderRadius": "6px", "cursor": "pointer", "boxShadow": S(V["tableShadow"]), "display": "flex", "alignItems": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)" }} className="scp11 scp4">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "animation": S(V["tapTable"]), "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                                      <path d="M3 12h.01"></path>
                                      <path d="M3 18h.01"></path>
                                      <path d="M3 6h.01"></path>
                                      <path d="M8 12h13"></path>
                                      <path d="M8 18h13"></path>
                                      <path d="M8 6h13"></path>
                                    </svg>
                                  </button>
                                  {" "}
                                  <button onClick={V["onKanban"]} title="Vista kanban" aria-label="Vista kanban" style={{ "border": S(V["kanbanBorder"]), "background": S(V["kanbanBg"]), "color": S(V["kanbanIcon"]), "flex": "1", "justifyContent": "center", "padding": "7px 10px", "borderRadius": "6px", "cursor": "pointer", "boxShadow": S(V["kanbanShadow"]), "display": "flex", "alignItems": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp11 scp4">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "animation": S(V["tapKanban"]), "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                      <path d="M9 3v18"></path>
                                      <path d="M15 3v18"></path>
                                    </svg>
                                  </button>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                              <div style={{ "borderTop": "1px solid #e5e5e5", "paddingTop": "14px" }}>
                                {" "}
                                <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em", "marginBottom": "8px" }}>
                                  {"ORDENAR POR"}
                                </div>
                                {" "}
                                <div title={V["sortNote"]} style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "4px", "background": "#f5f5f5", "borderRadius": "8px", "padding": "4px" }}>
                                  {" "}
                                  {L(V["sortFilters"]).map((_o_11, $index) => (
                                    <React.Fragment key={$index}>
                                      {" "}
                                      <button onClick={_o_11?.["go"]} style={{ "border": S(_o_11?.["border"]), "background": S(_o_11?.["bg"]), "color": "#171717", "fontSize": "14px", "fontWeight": "500", "padding": "6px 12px", "borderRadius": "6px", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp4">
                                        {T(_o_11?.["label"])}
                                      </button>
                                      {" "}
                                    </React.Fragment>
                                  ))}
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </>) : null}
                          {" "}
                        </div>
                        {" "}
                        <button onClick={V["onExportList"]} aria-label="Exportar lo que se ve a CSV" title="Exportar lo que se ve a CSV" style={{ "background": "transparent", "color": "#171717", "border": "1px solid transparent", "borderRadius": "8px", "width": "40px", "height": "40px", "padding": "0", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp12 scp10">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateY(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <path d="m17 8-5-5-5 5"></path>
                            <path d="M12 3v12"></path>
                          </svg>
                        </button>
                        {" "}
                      </>) : null}
                      {" "}
                      <span style={{ "width": "6px" }}></span>
                      {" "}
                      <button onClick={V["onNewTicket"]} style={{ "height": "40px", "boxSizing": "border-box", "whiteSpace": "nowrap", "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "0 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp13 scpv">
                        {" "}
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "transform": "rotate(var(--ir,0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                        {"Crear ticket "}
                      </button>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "12px", "flexWrap": "wrap", "marginBottom": "12px" }}>
                  {" "}
                  <div style={{ "minWidth": "0", "display": "flex", "alignItems": "baseline", "gap": "8px", "flexWrap": "wrap" }}>
                    {V["showGreet"] ? (<>
                      <span style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "animation": S(V["greetAnim"]) }}>
                        {T(V["saludo"])}{"."}
                      </span>
                    </>) : null}
                    <span style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#525252", "textWrap": "pretty" }}>
                      {T(V["pageSub"])}
                    </span>
                  </div>
                  {" "}
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "flexShrink": "0" }}>
                    {" "}
                    {V["canSwitchRole"] ? (<>
                      <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373" }}>
                        {"VER COMO"}
                      </span>
                      {" "}
                      <div style={{ "display": "flex", "gap": "4px", "background": "#f5f5f5", "borderRadius": "8px", "padding": "4px" }}>
                        {" "}
                        <button onClick={V["onRoleAdmin"]} style={{ "border": S(V["adminBorder"]), "background": S(V["adminBg"]), "color": "#171717", "fontSize": "14px", "fontWeight": "500", "padding": "6px 12px", "borderRadius": "6px", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp4">
                          {"Admin"}
                        </button>
                        {" "}
                        <button onClick={V["onRoleUser"]} style={{ "border": S(V["userBorder"]), "background": S(V["userBg"]), "color": "#171717", "fontSize": "14px", "fontWeight": "500", "padding": "6px 12px", "borderRadius": "6px", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp4">
                          {"Usuario"}
                        </button>
                        {" "}
                      </div>
                    </>) : null}
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                {V["hasChips"] ? (<>
                  {" "}
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "6px", "flexWrap": "wrap", "margin": "0 0 12px" }}>
                    {" "}
                    <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em", "marginRight": "2px" }}>
                      {"FILTRANDO POR"}
                    </span>
                    {" "}
                    {L(V["chips"]).map((_c_12, $index) => (
                      <React.Fragment key={$index}>
                        {" "}
                        <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "9999px", "padding": "4px 6px 4px 10px", "fontSize": "12px", "fontWeight": "500", "color": "#404040", "whiteSpace": "nowrap" }}>
                          {" "}
                          {_c_12?.["hasDot"] ? (<>
                            <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(_c_12?.["dot"]), "flexShrink": "0" }}></span>
                          </>) : null}
                          {T(_c_12?.["label"])}{" "}
                          <button onClick={_c_12?.["clear"]} aria-label={"Quitar filtro " + S(_c_12?.["label"])} title="Quitar filtro" style={{ "background": "transparent", "border": "none", "borderRadius": "9999px", "padding": "2px", "cursor": "pointer", "display": "flex", "alignItems": "center", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scpx scpt">
                            <svg style={{ "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </button>
                          {" "}
                        </span>
                        {" "}
                      </React.Fragment>
                    ))}
                    {" "}
                    <button onClick={V["onClearFilters"]} style={{ "background": "transparent", "border": "none", "padding": "4px 6px", "fontSize": "12px", "fontWeight": "500", "color": "#525252", "cursor": "pointer", "borderRadius": "6px", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scp0 scpt">
                      {"Limpiar todo"}
                    </button>
                    {" "}
                  </div>
                  {" "}
                </>) : null}
                {" "}
                {V["vistaAdmin"] ? (<>
                  {" "}
                  <div style={{ "display": "flex", "alignItems": "baseline", "gap": "20px", "flexWrap": "wrap", "marginBottom": "16px", "padding": "12px 16px", "background": "rgba(244,245,241,0.9)", "backdropFilter": "blur(12px)", "WebkitBackdropFilter": "blur(12px)", "borderRadius": "12px" }}>
                    {" "}
                    <div style={{ "display": "flex", "alignItems": "baseline", "gap": "8px" }}>
                      {" "}
                      <span style={{ "fontSize": "36px", "lineHeight": "1.11", "fontWeight": "500", "letterSpacing": "-0.02em", "color": "#171717" }}>
                        {T(V["statTotal"])}
                      </span>
                      {" "}
                      <span style={{ "fontSize": "14px", "color": "#525252" }}>
                        {T(V["statTotalLabel"])}
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "flexWrap": "wrap" }}>
                      {" "}
                      {L(V["statBreakdown"]).map((_b_13, $index) => (
                        <React.Fragment key={$index}>
                          {" "}
                          <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "fontSize": "14px", "color": "#525252", "whiteSpace": "nowrap" }}>
                            {" "}
                            <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(_b_13?.["dot"]), "flexShrink": "0" }}></span>
                            {T(_b_13?.["count"])}{" "}{T(_b_13?.["label"])}{" "}
                          </span>
                          {" "}
                        </React.Fragment>
                      ))}
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </>) : null}
                {" "}
                {V["isCards"] ? (<>
                  {" "}
                  <div key={V["swapKey"]} style={{ "animation": "fadeSwap var(--duration-base) var(--ease-standard) both" }}>
                    {" "}
                    {V["loading"] ? (<>
                      {" "}
                      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fill,minmax(316px,1fr))", "gap": "12px" }}>
                        {" "}
                        {L(V["ghostCards6"]).map((_g_14, $index) => (
                          <React.Fragment key={$index}>
                            {" "}
                            <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                              {" "}
                              <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
                                {" "}
                                <span style={{ "display": "block", "width": "36px", "height": "36px", "borderRadius": "8px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                                {" "}
                                <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "flex": "1", "minWidth": "0" }}>
                                  {" "}
                                  <span style={{ "display": "block", "width": S(_g_14?.["w"]), "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                                  {" "}
                                  <span style={{ "display": "block", "width": "52%", "height": "11px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                              <div style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
                                {" "}
                                <span style={{ "display": "block", "width": "96px", "height": "26px", "borderRadius": "9999px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                                {" "}
                                <span style={{ "display": "block", "width": "82px", "height": "22px", "borderRadius": "9999px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                                {" "}
                              </div>
                              {" "}
                              <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "borderTop": "1px solid #e5e5e5", "paddingTop": "12px" }}>
                                {" "}
                                <span style={{ "display": "block", "width": "40%", "height": "12px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                                {" "}
                                <span style={{ "display": "block", "width": "64px", "height": "12px", "borderRadius": "6px", "marginLeft": "auto", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
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
                    </>) : null}
                    {" "}
                    {V["loaded"] ? (<>
                      {" "}
                      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fill,minmax(316px,1fr))", "gap": "12px" }}>
                        {" "}
                        {L(V["rows"]).map((_t_15, $index) => (
                          <React.Fragment key={$index}>
                            {" "}
                            <div data-reveal="" onClick={_t_15?.["open"]} onKeyDown={_t_15?.["key"]} tabIndex="0" role="button" style={{ "background": "#ffffff", "border": "1px solid " + S(_t_15?.["focusBorder"]), "borderRadius": "12px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "14px", "cursor": "pointer", "boxShadow": S(_t_15?.["focusShadow"]), "transition": "transform var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)" }} className="scp14 scp15">
                              {" "}
                              <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
                                {" "}
                                <div style={{ "position": "relative", "flexShrink": "0" }}>
                                  {" "}
                                  <div style={{ "width": "36px", "height": "36px", "borderRadius": "8px", "background": "#f5f5f5", "border": "1px solid " + S(_t_15?.["autorRing"]), "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                                    {T(_t_15?.["autorIni"])}
                                  </div>
                                  {" "}
                                  {_t_15?.["hasAsig"] ? (<>
                                    {" "}
                                    <div title={"Asignado a " + S(_t_15?.["asig"])} style={{ "position": "absolute", "right": "-5px", "bottom": "-5px", "width": "20px", "height": "20px", "borderRadius": "6px", "background": "#ffffff", "border": "1px solid " + S(_t_15?.["ring"]), "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "10px", "fontWeight": "600", "color": "#171717" }}>
                                      {T(_t_15?.["ini"])}
                                    </div>
                                    {" "}
                                  </>) : null}
                                  {" "}
                                </div>
                                {" "}
                                <div style={{ "minWidth": "0", "flex": "1" }}>
                                  {" "}
                                  <div style={{ "display": "flex", "alignItems": "baseline", "gap": "6px", "minWidth": "0" }}>
                                    {" "}
                                    <span style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                      {T(_t_15?.["autor"])}
                                    </span>
                                    {" "}
                                    <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "flexShrink": "0" }}>
                                      {T(_t_15?.["code"])}
                                    </span>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div style={{ "fontSize": "12px", "color": "#737373", "marginTop": "2px", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                    {T(_t_15?.["cat"])}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <button onClick={_t_15?.["chatGo"]} aria-label={_t_15?.["chatLabel"]} title={_t_15?.["chatLabel"]} style={{ "flexShrink": "0", "height": "30px", "padding": "0 8px", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "5px", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp16 scp10">
                                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateY(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                  </svg>
                                  {_t_15?.["hasComments"] ? (<>
                                    {T(_t_15?.["commentCount"])}
                                  </>) : null}
                                </button>
                                {" "}
                                {_t_15?.["canAssign"] ? (<>
                                  {" "}
                                  <div onClick={_t_15?.["stop"]} style={{ "position": "relative", "flexShrink": "0" }} className="scp17">
                                    {" "}
                                    {_t_15?.["qaClosed"] ? (<>
                                      <span role="tooltip" style={{ "position": "absolute", "right": "calc(100% + 8px)", "top": "50%", "zIndex": "41", "background": "#171717", "color": "#ffffff", "borderRadius": "8px", "padding": "6px 10px", "fontSize": "12px", "fontWeight": "500", "lineHeight": "1.35", "whiteSpace": "nowrap", "pointerEvents": "none", "boxShadow": "0 8px 20px -8px rgba(0,0,0,0.35)", "opacity": "var(--tt,0)", "transform": "translate(var(--tx,4px),-50%)", "transition": "opacity 140ms ease,transform 140ms ease" }}>
                                        {T(_t_15?.["asigTip"])}
                                        <span style={{ "display": "block", "fontSize": "11px", "fontWeight": "400", "color": "#d4d4d4" }}>
                                          {T(_t_15?.["asigTipSub"])}
                                        </span>
                                      </span>
                                    </>) : null}
                                    <button onClick={_t_15?.["qaToggle"]} aria-label={_t_15?.["asigTitle"]} style={{ "height": "30px", "padding": "0 10px 0 4px", "borderRadius": "9999px", "border": "1px " + S(_t_15?.["asigBorder"]), "background": S(_t_15?.["qaBg"]), "color": "#171717", "fontSize": "12px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "6px", "whiteSpace": "nowrap", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp18 scp19">
                                      {" "}
                                      {_t_15?.["asigHas"] ? (<>
                                        <span style={{ "width": "22px", "height": "22px", "borderRadius": "9999px", "background": "#e5e5e5", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "10px", "fontWeight": "600", "color": "#171717", "flexShrink": "0", "transform": "var(--im,translateY(0)) scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                                          {T(_t_15?.["asigIni"])}
                                        </span>
                                        {T(_t_15?.["asigFirst"])}
                                      </>) : null}
                                      {" "}
                                      {_t_15?.["asigNone"] ? (<>
                                        <span style={{ "width": "22px", "height": "22px", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "transform": "var(--im,translateY(0)) scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M19 8v6"></path>
                                            <path d="M22 11h-6"></path>
                                          </svg>
                                        </span>
                                        {"Asignar"}
                                      </>) : null}
                                      {" "}
                                    </button>
                                    {" "}
                                    {_t_15?.["qaOpen"] ? (<>
                                      {" "}
                                      <div role="menu" aria-label={"Asignar " + S(_t_15?.["code"])} style={{ "position": "absolute", "top": "calc(100% + 6px)", "right": "0", "zIndex": "40", "width": "300px", "maxWidth": "calc(100vw - 32px)", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "6px", "display": "flex", "flexDirection": "column", "gap": "2px", "boxShadow": "rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px", "animation": "dropIn var(--duration-base) var(--ease-standard) both", "cursor": "default" }}>
                                        {" "}
                                        <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em", "padding": "6px 8px 4px" }}>
                                          {"ASIGNAR "}{T(_t_15?.["code"])}{" A"}
                                        </div>
                                        {" "}
                                        {L(_t_15?.["qaOpts"]).map((_o_16, $index) => (
                                          <React.Fragment key={$index}>
                                            {" "}
                                            <button onClick={_o_16?.["go"]} role="menuitem" title={_o_16?.["full"]} style={{ "display": "flex", "alignItems": "center", "gap": "8px", "width": "100%", "textAlign": "left", "background": S(_o_16?.["bg"]), "border": "none", "borderRadius": "8px", "padding": "7px 8px", "cursor": "pointer", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scpq scpr">
                                              {" "}
                                              <span style={{ "width": "24px", "height": "24px", "borderRadius": "9999px", "background": "#e5e5e5", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "10px", "fontWeight": "600", "color": "#171717", "flexShrink": "0", "transform": "scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                                                {T(_o_16?.["ini"])}
                                              </span>
                                              {" "}
                                              <span style={{ "fontSize": "14px", "fontWeight": S(_o_16?.["weight"]), "color": "#171717", "minWidth": "0", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                                {T(_o_16?.["nombre"])}
                                              </span>
                                              {_o_16?.["hasTag"] ? (<>
                                                <span style={{ "flexShrink": "0", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "10px", "letterSpacing": "0.04em", "color": "#171717", "background": S(_o_16?.["tagBg"]), "borderRadius": "9999px", "padding": "2px 7px" }}>
                                                  {T(_o_16?.["tag"])}
                                                </span>
                                              </>) : null}
                                              {" "}
                                              <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "flexShrink": "0" }}>
                                                {T(_o_16?.["carga"])}
                                              </span>
                                              {" "}
                                            </button>
                                            {" "}
                                          </React.Fragment>
                                        ))}
                                        {" "}
                                        {_t_15?.["asigHas"] && V["canUnassign"] ? (<>
                                          {" "}
                                          <button onClick={_t_15?.["qaClear"]} role="menuitem" style={{ "display": "flex", "alignItems": "center", "gap": "8px", "width": "100%", "textAlign": "left", "background": "transparent", "border": "none", "borderTop": "1px solid #e5e5e5", "borderRadius": "0 0 8px 8px", "marginTop": "4px", "padding": "9px 8px 7px", "fontSize": "13px", "color": "#525252", "cursor": "pointer", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scp0 scpt">
                                            {"Quitar asignación"}
                                          </button>
                                          {" "}
                                        </>) : null}
                                        {" "}
                                      </div>
                                      {" "}
                                    </>) : null}
                                    {" "}
                                  </div>
                                  {" "}
                                </>) : null}
                                {" "}
                                {_t_15?.["canEdit"] ? (<>
                                  {" "}
                                  <button onClick={_t_15?.["edit"]} aria-label={_t_15?.["editLabel"]} title={_t_15?.["editLabel"]} style={{ "flexShrink": "0", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp1a scp19">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,rotate(0deg) scale(1)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                      <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                                    </svg>
                                  </button>
                                  {" "}
                                </>) : null}
                                {" "}
                              </div>
                              {" "}
                              <div style={{ "marginTop": "-6px" }}>
                                {" "}
                                <div style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717", "textWrap": "pretty" }}>
                                  {" "}
                                  {L(_t_15?.["tituloParts"]).map((_p_17, $index) => (
                                    <React.Fragment key={$index}>
                                      {" "}
                                      <span key={_p_17?.["k"]} style={{ "background": S(_p_17?.["bg"]), "borderRadius": "3px", "color": "#171717" }}>
                                        {T(_p_17?.["t"])}
                                      </span>
                                      {" "}
                                    </React.Fragment>
                                  ))}
                                  {" "}
                                </div>
                                {" "}
                                {_t_15?.["sitShow"] ? (<>
                                  {" "}
                                  <div style={{ "display": "flex", "alignItems": "center", "gap": "7px", "marginTop": "6px" }}>
                                    {" "}
                                    <span style={{ "width": "7px", "height": "7px", "borderRadius": "9999px", "background": S(_t_15?.["sitDot"]), "flexShrink": "0" }}></span>
                                    {" "}
                                    <span style={{ "fontSize": "13px", "lineHeight": "1.46", "color": "#404040", "minWidth": "0", "textWrap": "pretty" }}>
                                      {T(_t_15?.["sitText"])}
                                    </span>
                                    {" "}
                                  </div>
                                  {" "}
                                </>) : null}
                                {" "}
                                <div style={{ "fontSize": "13px", "lineHeight": "1.46", "color": "#525252", "marginTop": "4px", "textWrap": "pretty" }}>
                                  {" "}
                                  {L(_t_15?.["excerptParts"]).map((_p_18, $index) => (
                                    <React.Fragment key={$index}>
                                      {" "}
                                      <span key={_p_18?.["k"]} style={{ "background": S(_p_18?.["bg"]), "borderRadius": "3px" }}>
                                        {T(_p_18?.["t"])}
                                      </span>
                                      {" "}
                                    </React.Fragment>
                                  ))}
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                              <div style={{ "display": "flex", "alignItems": "center", "flexWrap": "wrap", "gap": "8px" }}>
                                {" "}
                                <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "background": S(_t_15?.["statusBg"]), "borderRadius": "9999px", "padding": "6px 12px", "fontSize": "12px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap" }}>
                                  {_t_15?.["statusOpen"] ? (<>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={_t_15?.["statusDot"]} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <circle cx="12" cy="12" r="1" fill={_t_15?.["statusDot"]}></circle>
                                    </svg>
                                  </>) : null}
                                  {_t_15?.["statusProg"] ? (<>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={_t_15?.["statusDot"]} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                  </>) : null}
                                  {_t_15?.["statusClosed"] ? (<>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={_t_15?.["statusDot"]} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                      <path d="m9 11 3 3L22 4"></path>
                                    </svg>
                                  </>) : null}
                                  {T(_t_15?.["statusLabel"])}
                                </span>
                                {" "}
                                <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "11px", "fontWeight": "500", "color": "#404040", "whiteSpace": "nowrap" }}>
                                  {" "}
                                  <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(_t_15?.["prioDot"]) }}></span>
                                  {T(_t_15?.["prioLabel"])}{" "}
                                </span>
                                {" "}
                                {_t_15?.["slaShow"] ? (<>
                                  {" "}
                                  <span title={_t_15?.["slaTitle"]} style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "background": S(_t_15?.["slaBg"]), "border": S(_t_15?.["slaBorder"]), "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "11px", "fontWeight": "500", "color": S(_t_15?.["slaInk"]), "whiteSpace": "nowrap" }}>
                                    {" "}
                                    {_t_15?.["slaLate"] ? (<>
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                        <path d="M12 9v4"></path>
                                        <path d="M12 17h.01"></path>
                                      </svg>
                                    </>) : null}
                                    {" "}
                                    {_t_15?.["slaWatch"] ? (<>
                                      <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": "#ea580c", "flexShrink": "0" }}></span>
                                    </>) : null}
                                    {" "}
                                    {_t_15?.["slaWaiting"] ? (<>
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                      </svg>
                                    </>) : null}
                                    {T(_t_15?.["slaLabel"])}{" "}
                                  </span>
                                  {" "}
                                </>) : null}
                                {" "}
                                {_t_15?.["canTake"] ? (<>
                                  {" "}
                                  <button onClick={_t_15?.["take"]} aria-label={_t_15?.["takeLabel"]} title={_t_15?.["takeLabel"]} style={{ "marginLeft": "auto", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "5px 10px", "fontSize": "12px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "6px", "whiteSpace": "nowrap", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp1b scp4">
                                    {" "}
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": S(_t_15?.["tapTake"]), "transform": "var(--im,translateY(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                      <circle cx="9" cy="7" r="4"></circle>
                                      <path d="M19 8v6"></path>
                                      <path d="M22 11h-6"></path>
                                    </svg>
                                    {"Tomar "}
                                  </button>
                                  {" "}
                                </>) : null}
                                {" "}
                              </div>
                              {" "}
                              <div style={{ "display": "flex", "alignItems": "center", "gap": "10px", "borderTop": "1px solid #e5e5e5", "paddingTop": "12px", "marginTop": "auto" }}>
                                {" "}
                                <span style={{ "fontSize": "12px", "color": "#737373", "minWidth": "0", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                  {T(_t_15?.["asig"])}
                                </span>
                                {" "}
                                {_t_15?.["hasFiles"] ? (<>
                                  {" "}
                                  <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "4px", "flexShrink": "0", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252" }}>
                                    {" "}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                      <circle cx="9" cy="9" r="2"></circle>
                                      <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"></path>
                                    </svg>
                                    {T(_t_15?.["fileCount"])}{" "}
                                  </span>
                                  {" "}
                                </>) : null}
                                {" "}
                                {_t_15?.["hasComments"] ? (<>
                                  {" "}
                                  <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "4px", "flexShrink": "0", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252" }}>
                                    {" "}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    {T(_t_15?.["commentCount"])}{" "}
                                  </span>
                                  {" "}
                                </>) : null}
                                {" "}
                                <span style={{ "marginLeft": "auto", "display": "inline-flex", "alignItems": "center", "gap": "6px", "flexShrink": "0", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373" }}>
                                  {" "}
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                  </svg>
                                  {T(_t_15?.["updated"])}{" "}
                                </span>
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
                    </>) : null}
                    {" "}
                    {V["isEmpty"] ? (<>
                      {" "}
                      <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "64px 24px", "textAlign": "center" }}>
                        {" "}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "margin": "0 auto 12px", "display": "block" }}>
                          <path d="m13.5 8.5-5 5"></path>
                          <path d="m8.5 8.5 5 5"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "letterSpacing": "0.04em" }}>
                          {"SIN RESULTADOS"}
                        </div>
                        {" "}
                        <div style={{ "fontSize": "16px", "lineHeight": "1.5", "fontWeight": "500", "color": "#171717", "marginTop": "8px" }}>
                          {T(V["emptyTitle"])}
                        </div>
                        {" "}
                        <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "marginTop": "4px", "textWrap": "pretty" }}>
                          {T(V["emptyHelp"])}
                        </div>
                        {" "}
                        {V["emptyDayOne"] ? (<>
                          {" "}
                          <button onClick={V["onNewTicket"]} style={{ "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "10px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "marginTop": "16px", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1c scp2">
                            {" "}
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            {"Crear el primer ticket "}
                          </button>
                          {" "}
                        </>) : null}
                        {" "}
                        <button onClick={V["onClearFilters"]} style={{ "marginTop": "16px", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "6px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpx scp4">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                            <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"></path>
                            <path d="m22 3-5 5"></path>
                            <path d="m17 3 5 5"></path>
                          </svg>
                          {"Limpiar filtros"}
                        </button>
                        {" "}
                      </div>
                      {" "}
                    </>) : null}
                    {" "}
                    {V["pgTickets"]?.["show"] ? (<>
                      {" "}
                      <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "16px", "background": "#f5f5f5", "borderRadius": "12px", "padding": "10px 16px", "marginTop": "12px" }}>
                        {" "}
                        <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
                          {T(V["pgTickets"]?.["range"])}
                        </span>
                        {" "}
                        <div style={{ "display": "flex", "gap": "8px" }}>
                          {" "}
                          <button onClick={V["pgTickets"]?.["prev"]} disabled={V["pgTickets"]?.["atStart"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "fontSize": "14px", "fontWeight": "500", "padding": "6px 12px", "cursor": S(V["pgTickets"]?.["prevCursor"]), "opacity": S(V["pgTickets"]?.["prevOpacity"]) }} className="scpl scp10">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                              <path d="m15 18-6-6 6-6"></path>
                            </svg>
                            {"Anterior"}
                          </button>
                          {" "}
                          <button onClick={V["pgTickets"]?.["next"]} disabled={V["pgTickets"]?.["atEnd"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "fontSize": "14px", "fontWeight": "500", "padding": "6px 12px", "cursor": S(V["pgTickets"]?.["nextCursor"]), "opacity": S(V["pgTickets"]?.["nextOpacity"]) }} className="scp1d scp10">
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
                </>) : null}
                {" "}
                {V["isTable"] ? (<>
                  {" "}
                  <div key={V["swapKey"]} style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "overflowX": "auto", "animation": "fadeSwap var(--duration-base) var(--ease-standard) both" }}>
                    {" "}
                    <div style={{ "minWidth": "924px", "display": "grid", "gridTemplateColumns": "minmax(0,1fr) 132px 116px 136px 168px 44px", "gap": "16px", "alignItems": "center", "padding": "10px 16px", "background": "#f5f5f5", "borderBottom": "1px solid #e5e5e5", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
                      {" "}
                      <span>
                        {"TICKET"}
                      </span>
                      <span>
                        {"ESTADO"}
                      </span>
                      <span>
                        {"PRIORIDAD"}
                      </span>
                      <span>
                        {"ASIGNADO"}
                      </span>
                      <span>
                        {"ACTIVIDAD"}
                      </span>
                      <span></span>
                      {" "}
                    </div>
                    {" "}
                    {V["loading"] ? (<>
                      {" "}
                      {L(V["ghostRows"]).map((_g_19, $index) => (
                        <React.Fragment key={$index}>
                          {" "}
                          <div style={{ "minWidth": "924px", "display": "grid", "gridTemplateColumns": "minmax(0,1fr) 132px 116px 136px 168px 44px", "gap": "16px", "alignItems": "center", "padding": "12px 16px", "borderBottom": "1px solid #e5e5e5" }}>
                            {" "}
                            <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "minWidth": "0" }}>
                              {" "}
                              <span style={{ "display": "block", "width": "36px", "height": "36px", "borderRadius": "8px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                              {" "}
                              <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "minWidth": "0", "flex": "1" }}>
                                {" "}
                                <span style={{ "display": "block", "width": S(_g_19?.["w"]), "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                                {" "}
                                <span style={{ "display": "block", "width": "40%", "height": "11px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            <span style={{ "display": "block", "width": "96px", "height": "26px", "borderRadius": "9999px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                            {" "}
                            <span style={{ "display": "block", "width": "82px", "height": "22px", "borderRadius": "9999px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                            {" "}
                            <span style={{ "display": "block", "width": "72%", "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                            {" "}
                            <span style={{ "display": "block", "width": "88px", "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                            {" "}
                            <span style={{ "display": "block", "width": "30px", "height": "30px", "borderRadius": "8px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                            {" "}
                          </div>
                          {" "}
                        </React.Fragment>
                      ))}
                      {" "}
                    </>) : null}
                    {" "}
                    {V["loaded"] ? (<>
                      {" "}
                      {L(V["rows"]).map((_t_20, $index) => (
                        <React.Fragment key={$index}>
                          {" "}
                          <div data-reveal="" onClick={_t_20?.["open"]} onKeyDown={_t_20?.["key"]} tabIndex="0" role="button" style={{ "minWidth": "924px", "display": "grid", "gridTemplateColumns": "minmax(0,1fr) 132px 116px 136px 168px 44px", "gap": "16px", "alignItems": "center", "padding": "12px 16px", "borderBottom": "1px solid #e5e5e5", "cursor": "pointer", "transition": "background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)" }} className="scpg scpt">
                            {" "}
                            <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "minWidth": "0" }}>
                              {" "}
                              <div style={{ "position": "relative", "flexShrink": "0" }}>
                                {" "}
                                <div style={{ "width": "36px", "height": "36px", "borderRadius": "8px", "background": "#f5f5f5", "border": "1px solid #e5e5e5", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "14px", "color": "#404040" }}>
                                  {T(_t_20?.["glyph"])}
                                </div>
                                {" "}
                                {_t_20?.["hasAsig"] ? (<>
                                  {" "}
                                  <div style={{ "position": "absolute", "right": "-5px", "bottom": "-5px", "width": "20px", "height": "20px", "borderRadius": "6px", "background": "#ffffff", "border": "1px solid " + S(_t_20?.["ring"]), "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "10px", "fontWeight": "600", "color": "#171717" }}>
                                    {T(_t_20?.["ini"])}
                                  </div>
                                  {" "}
                                </>) : null}
                                {" "}
                              </div>
                              {" "}
                              <div style={{ "minWidth": "0" }}>
                                {" "}
                                <div style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                  {T(_t_20?.["titulo"])}
                                </div>
                                {" "}
                                <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                  {T(_t_20?.["code"])}{" · "}{T(_t_20?.["cat"])}{" · "}{T(_t_20?.["autor"])}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "background": S(_t_20?.["statusBg"]), "borderRadius": "9999px", "padding": "6px 12px", "fontSize": "12px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "justifySelf": "start" }}>
                              {_t_20?.["statusOpen"] ? (<>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={_t_20?.["statusDot"]} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <circle cx="12" cy="12" r="1" fill={_t_20?.["statusDot"]}></circle>
                                </svg>
                              </>) : null}
                              {_t_20?.["statusProg"] ? (<>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={_t_20?.["statusDot"]} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 6v6l4 2"></path>
                                </svg>
                              </>) : null}
                              {_t_20?.["statusClosed"] ? (<>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={_t_20?.["statusDot"]} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                  <path d="m9 11 3 3L22 4"></path>
                                </svg>
                              </>) : null}
                              {T(_t_20?.["statusLabel"])}
                            </span>
                            {" "}
                            <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "11px", "fontWeight": "500", "color": "#404040", "whiteSpace": "nowrap", "justifySelf": "start" }}>
                              {" "}
                              <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(_t_20?.["prioDot"]) }}></span>
                              {T(_t_20?.["prioLabel"])}{" "}
                            </span>
                            {" "}
                            <span style={{ "fontSize": "14px", "color": "#525252", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                              {T(_t_20?.["asig"])}
                            </span>
                            {" "}
                            <div style={{ "display": "flex", "alignItems": "center", "gap": "10px", "minWidth": "0" }}>
                              {" "}
                              {_t_20?.["slaShow"] ? (<>
                                {" "}
                                <span title={_t_20?.["slaTitle"]} style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "flexShrink": "0", "background": "#ffffff", "border": S(_t_20?.["slaBorder"]), "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "11px", "fontWeight": "500", "color": S(_t_20?.["slaInk"]), "whiteSpace": "nowrap" }}>
                                  {" "}
                                  {_t_20?.["slaLate"] ? (<>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                      <path d="M12 9v4"></path>
                                      <path d="M12 17h.01"></path>
                                    </svg>
                                  </>) : null}
                                  {" "}
                                  {_t_20?.["slaWatch"] ? (<>
                                    <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": "#ea580c", "flexShrink": "0" }}></span>
                                  </>) : null}
                                  {" "}
                                  {_t_20?.["slaWaiting"] ? (<>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                  </>) : null}
                                  {T(_t_20?.["slaLabel"])}{" "}
                                </span>
                                {" "}
                              </>) : null}
                              {" "}
                              <span title={_t_20?.["createdTitle"]} style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "12px", "color": "#737373", "whiteSpace": "nowrap" }}>
                                {" "}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 6v6l4 2"></path>
                                </svg>
                                {T(_t_20?.["updated"])}{" "}
                              </span>
                              {" "}
                              {_t_20?.["hasFiles"] ? (<>
                                {" "}
                                <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "4px", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "12px", "color": "#525252" }}>
                                  {" "}
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                    <circle cx="9" cy="9" r="2"></circle>
                                    <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"></path>
                                  </svg>
                                  {T(_t_20?.["fileCount"])}{" "}
                                </span>
                                {" "}
                              </>) : null}
                              {" "}
                              {_t_20?.["hasComments"] ? (<>
                                {" "}
                                <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "4px", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "12px", "color": "#525252" }}>
                                  {" "}
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                  </svg>
                                  {T(_t_20?.["commentCount"])}{" "}
                                </span>
                                {" "}
                              </>) : null}
                              {" "}
                            </div>
                            {" "}
                            {_t_20?.["canEdit"] ? (<>
                              {" "}
                              <button onClick={_t_20?.["edit"]} aria-label={_t_20?.["editLabel"]} title={_t_20?.["editLabel"]} style={{ "justifySelf": "start", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "6px", "display": "inline-flex", "alignItems": "center", "gap": "6px", "display": "flex", "alignItems": "center", "justifyContent": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp1a scp19">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,rotate(0deg) scale(1)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                  <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                                </svg>
                              </button>
                              {" "}
                            </>) : null}
                            {" "}
                          </div>
                          {" "}
                        </React.Fragment>
                      ))}
                      {" "}
                    </>) : null}
                    {" "}
                    {V["isEmpty"] ? (<>
                      {" "}
                      <div style={{ "padding": "64px 24px", "textAlign": "center" }}>
                        {" "}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "margin": "0 auto 12px", "display": "block" }}>
                          <path d="m13.5 8.5-5 5"></path>
                          <path d="m8.5 8.5 5 5"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "letterSpacing": "0.04em" }}>
                          {"SIN RESULTADOS"}
                        </div>
                        {" "}
                        <div style={{ "fontSize": "16px", "lineHeight": "1.5", "fontWeight": "500", "color": "#171717", "marginTop": "8px" }}>
                          {T(V["emptyTitle"])}
                        </div>
                        {" "}
                        <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "marginTop": "4px", "textWrap": "pretty" }}>
                          {T(V["emptyHelp"])}
                        </div>
                        {" "}
                        {V["emptyDayOne"] ? (<>
                          {" "}
                          <button onClick={V["onNewTicket"]} style={{ "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "10px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "marginTop": "16px", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1c scp2">
                            {" "}
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            {"Crear el primer ticket "}
                          </button>
                          {" "}
                        </>) : null}
                        {" "}
                      </div>
                      {" "}
                    </>) : null}
                    {" "}
                    {V["pgTickets"]?.["show"] ? (<>
                      {" "}
                      <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "16px", "padding": "10px 16px", "background": "#f5f5f5", "borderTop": "1px solid #e5e5e5" }}>
                        {" "}
                        <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
                          {T(V["pgTickets"]?.["range"])}
                        </span>
                        {" "}
                        <div style={{ "display": "flex", "gap": "8px" }}>
                          {" "}
                          <button onClick={V["pgTickets"]?.["prev"]} disabled={V["pgTickets"]?.["atStart"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "fontSize": "14px", "fontWeight": "500", "padding": "6px 12px", "cursor": S(V["pgTickets"]?.["prevCursor"]), "opacity": S(V["pgTickets"]?.["prevOpacity"]) }} className="scpl scp10">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                              <path d="m15 18-6-6 6-6"></path>
                            </svg>
                            {"Anterior"}
                          </button>
                          {" "}
                          <button onClick={V["pgTickets"]?.["next"]} disabled={V["pgTickets"]?.["atEnd"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "fontSize": "14px", "fontWeight": "500", "padding": "6px 12px", "cursor": S(V["pgTickets"]?.["nextCursor"]), "opacity": S(V["pgTickets"]?.["nextOpacity"]) }} className="scp1d scp10">
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
                </>) : null}
                {" "}
                {V["isKanban"] ? (<>
                  {" "}
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "12px" }}>
                    {" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                      <circle cx="9" cy="5" r="1"></circle>
                      <circle cx="9" cy="12" r="1"></circle>
                      <circle cx="9" cy="19" r="1"></circle>
                      <circle cx="15" cy="5" r="1"></circle>
                      <circle cx="15" cy="12" r="1"></circle>
                      <circle cx="15" cy="19" r="1"></circle>
                    </svg>
                    {" "}
                    <span style={{ "fontSize": "12px", "color": "#525252", "textWrap": "pretty" }}>
                      {T(V["dragHint"])}
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div key={V["swapKey"]} style={{ "display": "grid", "gridTemplateColumns": "repeat(" + S(V["columnCount"]) + ",minmax(248px,1fr))", "gap": "16px", "alignItems": "start", "overflowX": "auto", "paddingBottom": "4px", "animation": "fadeSwap var(--duration-base) var(--ease-standard) both" }}>
                    {" "}
                    {L(V["columns"]).map((_c_21, $index) => (
                      <React.Fragment key={$index}>
                        {" "}
                        <div onDragOver={_c_21?.["onDragOver"]} onDragLeave={_c_21?.["onDragLeave"]} onDrop={_c_21?.["onDrop"]} style={{ "background": S(_c_21?.["colBg"]), "border": S(_c_21?.["colRing"]), "borderRadius": "12px", "padding": "8px", "opacity": S(_c_21?.["colOp"]), "transition": "background-color var(--duration-base) var(--ease-standard),border-color var(--duration-base) var(--ease-standard),opacity var(--duration-base) var(--ease-standard)" }}>
                          {" "}
                          <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "padding": "8px 8px 12px" }}>
                            {" "}
                            <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(_c_21?.["dot"]) }}></span>
                            {" "}
                            <span style={{ "fontSize": "14px", "fontWeight": "600", "color": "#171717" }}>
                              {T(_c_21?.["label"])}
                            </span>
                            {" "}
                            {_c_21?.["isOver"] ? (<>
                              {" "}
                              <span style={{ "fontSize": "11px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "animation": "hintIn var(--duration-fast) var(--ease-standard) both" }}>
                                {T(_c_21?.["dropLabel"])}
                              </span>
                              {" "}
                            </>) : null}
                            {" "}
                            <span key={_c_21?.["countKey"]} style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "animation": "numBump var(--duration-base) var(--ease-standard) both" }}>
                              {T(_c_21?.["count"])}
                            </span>
                            {" "}
                          </div>
                          {" "}
                          <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                            {" "}
                            {V["loading"] ? (<>
                              {" "}
                              {L(V["ghostCards"]).map((_g_22, $index) => (
                                <React.Fragment key={$index}>
                                  {" "}
                                  <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "12px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                                    {" "}
                                    <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
                                      {" "}
                                      <span style={{ "display": "block", "width": "36px", "height": "36px", "borderRadius": "8px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                                      {" "}
                                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "flex": "1", "minWidth": "0" }}>
                                        {" "}
                                        <span style={{ "display": "block", "width": S(_g_22?.["w"]), "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                                        {" "}
                                        <span style={{ "display": "block", "width": "56%", "height": "11px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                                        {" "}
                                      </div>
                                      {" "}
                                    </div>
                                    {" "}
                                    <div style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
                                      {" "}
                                      <span style={{ "display": "block", "width": "82px", "height": "22px", "borderRadius": "9999px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                                      {" "}
                                      <span style={{ "marginLeft": "auto" }}>
                                        <span style={{ "display": "block", "width": "62px", "height": "11px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                                      </span>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </React.Fragment>
                              ))}
                              {" "}
                            </>) : null}
                            {" "}
                            {L(_c_21?.["items"]).map((_t_23, $index) => (
                              <React.Fragment key={$index}>
                                {" "}
                                <div onClick={_t_23?.["open"]} onKeyDown={_t_23?.["key"]} draggable={_t_23?.["canDrag"]} onDragStart={_t_23?.["onDragStart"]} onDragEnd={_t_23?.["onDragEnd"]} tabIndex="0" role="button" style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "12px", "cursor": S(_t_23?.["grab"]), "display": "flex", "flexDirection": "column", "gap": "12px", "opacity": S(_t_23?.["dragOp"]), "transform": S(_t_23?.["dragTilt"]), "animation": S(_t_23?.["landAnim"]), "transition": "transform var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp14 scp15">
                                  {" "}
                                  <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
                                    {" "}
                                    <div style={{ "position": "relative", "flexShrink": "0" }}>
                                      {" "}
                                      <div style={{ "width": "36px", "height": "36px", "borderRadius": "8px", "background": "#f5f5f5", "border": "1px solid " + S(_t_23?.["autorRing"]), "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                                        {T(_t_23?.["autorIni"])}
                                      </div>
                                      {" "}
                                      {_t_23?.["hasAsig"] ? (<>
                                        {" "}
                                        <div title={"Asignado a " + S(_t_23?.["asig"])} style={{ "position": "absolute", "right": "-5px", "bottom": "-5px", "width": "20px", "height": "20px", "borderRadius": "6px", "background": "#ffffff", "border": "1px solid " + S(_t_23?.["ring"]), "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "10px", "fontWeight": "600", "color": "#171717" }}>
                                          {T(_t_23?.["ini"])}
                                        </div>
                                        {" "}
                                      </>) : null}
                                      {" "}
                                    </div>
                                    {" "}
                                    <div style={{ "minWidth": "0", "flex": "1" }}>
                                      {" "}
                                      <div style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717", "textWrap": "pretty" }}>
                                        {" "}
                                        {L(_t_23?.["tituloParts"]).map((_p_24, $index) => (
                                          <React.Fragment key={$index}>
                                            {" "}
                                            <span key={_p_24?.["k"]} style={{ "background": S(_p_24?.["bg"]), "borderRadius": "3px", "color": "#171717" }}>
                                              {T(_p_24?.["t"])}
                                            </span>
                                            {" "}
                                          </React.Fragment>
                                        ))}
                                        {" "}
                                      </div>
                                      {" "}
                                      <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "marginTop": "2px" }}>
                                        {T(_t_23?.["code"])}{" · "}{T(_t_23?.["cat"])}
                                      </div>
                                      {" "}
                                    </div>
                                    {" "}
                                    <button onClick={_t_23?.["chatGo"]} aria-label={_t_23?.["chatLabel"]} title={_t_23?.["chatLabel"]} style={{ "flexShrink": "0", "height": "30px", "padding": "0 8px", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "5px", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp16 scp10">
                                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateY(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                      </svg>
                                      {_t_23?.["hasComments"] ? (<>
                                        {T(_t_23?.["commentCount"])}
                                      </>) : null}
                                    </button>
                                    {" "}
                                    {_t_23?.["canAssign"] ? (<>
                                      {" "}
                                      <div onClick={_t_23?.["stop"]} style={{ "position": "relative", "flexShrink": "0" }} className="scp17">
                                        {" "}
                                        {_t_23?.["qaClosed"] ? (<>
                                          <span role="tooltip" style={{ "position": "absolute", "right": "calc(100% + 8px)", "top": "50%", "zIndex": "41", "background": "#171717", "color": "#ffffff", "borderRadius": "8px", "padding": "6px 10px", "fontSize": "12px", "fontWeight": "500", "lineHeight": "1.35", "whiteSpace": "nowrap", "pointerEvents": "none", "boxShadow": "0 8px 20px -8px rgba(0,0,0,0.35)", "opacity": "var(--tt,0)", "transform": "translate(var(--tx,4px),-50%)", "transition": "opacity 140ms ease,transform 140ms ease" }}>
                                            {T(_t_23?.["asigTip"])}
                                            <span style={{ "display": "block", "fontSize": "11px", "fontWeight": "400", "color": "#d4d4d4" }}>
                                              {T(_t_23?.["asigTipSub"])}
                                            </span>
                                          </span>
                                        </>) : null}
                                        <button onClick={_t_23?.["qaToggle"]} aria-label={_t_23?.["asigTitle"]} style={{ "height": "30px", "padding": "0 10px 0 4px", "borderRadius": "9999px", "border": "1px " + S(_t_23?.["asigBorder"]), "background": S(_t_23?.["qaBg"]), "color": "#171717", "fontSize": "12px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "6px", "whiteSpace": "nowrap", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp18 scp19">
                                          {" "}
                                          {_t_23?.["asigHas"] ? (<>
                                            <span style={{ "width": "22px", "height": "22px", "borderRadius": "9999px", "background": "#e5e5e5", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "10px", "fontWeight": "600", "color": "#171717", "flexShrink": "0", "transform": "var(--im,translateY(0)) scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                                              {T(_t_23?.["asigIni"])}
                                            </span>
                                            {T(_t_23?.["asigFirst"])}
                                          </>) : null}
                                          {" "}
                                          {_t_23?.["asigNone"] ? (<>
                                            <span style={{ "width": "22px", "height": "22px", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "transform": "var(--im,translateY(0)) scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <path d="M19 8v6"></path>
                                                <path d="M22 11h-6"></path>
                                              </svg>
                                            </span>
                                            {"Asignar"}
                                          </>) : null}
                                          {" "}
                                        </button>
                                        {" "}
                                        {_t_23?.["qaOpen"] ? (<>
                                          {" "}
                                          <div role="menu" aria-label={"Asignar " + S(_t_23?.["code"])} style={{ "position": "absolute", "top": "calc(100% + 6px)", "right": "0", "zIndex": "40", "width": "300px", "maxWidth": "calc(100vw - 32px)", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "6px", "display": "flex", "flexDirection": "column", "gap": "2px", "boxShadow": "rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px", "animation": "dropIn var(--duration-base) var(--ease-standard) both", "cursor": "default" }}>
                                            {" "}
                                            <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em", "padding": "6px 8px 4px" }}>
                                              {"ASIGNAR "}{T(_t_23?.["code"])}{" A"}
                                            </div>
                                            {" "}
                                            {L(_t_23?.["qaOpts"]).map((_o_25, $index) => (
                                              <React.Fragment key={$index}>
                                                {" "}
                                                <button onClick={_o_25?.["go"]} role="menuitem" title={_o_25?.["full"]} style={{ "display": "flex", "alignItems": "center", "gap": "8px", "width": "100%", "textAlign": "left", "background": S(_o_25?.["bg"]), "border": "none", "borderRadius": "8px", "padding": "7px 8px", "cursor": "pointer", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scpq scpr">
                                                  {" "}
                                                  <span style={{ "width": "24px", "height": "24px", "borderRadius": "9999px", "background": "#e5e5e5", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "10px", "fontWeight": "600", "color": "#171717", "flexShrink": "0", "transform": "scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                                                    {T(_o_25?.["ini"])}
                                                  </span>
                                                  {" "}
                                                  <span style={{ "fontSize": "14px", "fontWeight": S(_o_25?.["weight"]), "color": "#171717", "minWidth": "0", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                                    {T(_o_25?.["nombre"])}
                                                  </span>
                                                  {_o_25?.["hasTag"] ? (<>
                                                    <span style={{ "flexShrink": "0", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "10px", "letterSpacing": "0.04em", "color": "#171717", "background": S(_o_25?.["tagBg"]), "borderRadius": "9999px", "padding": "2px 7px" }}>
                                                      {T(_o_25?.["tag"])}
                                                    </span>
                                                  </>) : null}
                                                  {" "}
                                                  <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "flexShrink": "0" }}>
                                                    {T(_o_25?.["carga"])}
                                                  </span>
                                                  {" "}
                                                </button>
                                                {" "}
                                              </React.Fragment>
                                            ))}
                                            {" "}
                                            {_t_23?.["asigHas"] && V["canUnassign"] ? (<>
                                              {" "}
                                              <button onClick={_t_23?.["qaClear"]} role="menuitem" style={{ "display": "flex", "alignItems": "center", "gap": "8px", "width": "100%", "textAlign": "left", "background": "transparent", "border": "none", "borderTop": "1px solid #e5e5e5", "borderRadius": "0 0 8px 8px", "marginTop": "4px", "padding": "9px 8px 7px", "fontSize": "13px", "color": "#525252", "cursor": "pointer", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scp0 scpt">
                                                {"Quitar asignación"}
                                              </button>
                                              {" "}
                                            </>) : null}
                                            {" "}
                                          </div>
                                          {" "}
                                        </>) : null}
                                        {" "}
                                      </div>
                                      {" "}
                                    </>) : null}
                                    {" "}
                                    {_t_23?.["canEdit"] ? (<>
                                      {" "}
                                      <button onClick={_t_23?.["edit"]} aria-label={_t_23?.["editLabel"]} title={_t_23?.["editLabel"]} style={{ "marginLeft": "auto", "flexShrink": "0", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp1e scp4">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,rotate(0deg) scale(1)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                          <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                                        </svg>
                                      </button>
                                      {" "}
                                    </>) : null}
                                    {" "}
                                  </div>
                                  {" "}
                                  <div style={{ "display": "flex", "alignItems": "center", "flexWrap": "wrap", "gap": "8px", "rowGap": "8px" }}>
                                    {" "}
                                    <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "flexShrink": "0", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "11px", "fontWeight": "500", "color": "#404040", "whiteSpace": "nowrap" }}>
                                      {" "}
                                      <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(_t_23?.["prioDot"]) }}></span>
                                      {T(_t_23?.["prioLabel"])}{" "}
                                    </span>
                                    {" "}
                                    {_t_23?.["slaShow"] ? (<>
                                      {" "}
                                      <span title={_t_23?.["slaTitle"]} style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "flexShrink": "0", "background": "#ffffff", "border": S(_t_23?.["slaBorder"]), "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "11px", "fontWeight": "500", "color": S(_t_23?.["slaInk"]), "whiteSpace": "nowrap" }}>
                                        {" "}
                                        {_t_23?.["slaLate"] ? (<>
                                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                            <path d="M12 9v4"></path>
                                            <path d="M12 17h.01"></path>
                                          </svg>
                                        </>) : null}
                                        {" "}
                                        {_t_23?.["slaWatch"] ? (<>
                                          <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": "#ea580c", "flexShrink": "0" }}></span>
                                        </>) : null}
                                        {" "}
                                        {_t_23?.["slaWaiting"] ? (<>
                                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                          </svg>
                                        </>) : null}
                                        {T(_t_23?.["slaLabel"])}{" "}
                                      </span>
                                      {" "}
                                    </>) : null}
                                    {" "}
                                    {_t_23?.["hasFiles"] ? (<>
                                      {" "}
                                      <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "4px", "flexShrink": "0", "whiteSpace": "nowrap", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252" }}>
                                        {" "}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                          <circle cx="9" cy="9" r="2"></circle>
                                          <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"></path>
                                        </svg>
                                        {T(_t_23?.["fileCount"])}{" "}
                                      </span>
                                      {" "}
                                    </>) : null}
                                    {" "}
                                    {_t_23?.["hasComments"] ? (<>
                                      {" "}
                                      <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "4px", "flexShrink": "0", "whiteSpace": "nowrap", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252" }}>
                                        {" "}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        {T(_t_23?.["commentCount"])}{" "}
                                      </span>
                                      {" "}
                                    </>) : null}
                                    {" "}
                                    <span style={{ "marginLeft": "auto", "display": "inline-flex", "alignItems": "center", "gap": "6px", "flexShrink": "0", "whiteSpace": "nowrap", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373" }}>
                                      {" "}
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 6v6l4 2"></path>
                                      </svg>
                                      {T(_t_23?.["updated"])}{" "}
                                    </span>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                              </React.Fragment>
                            ))}
                            {" "}
                            {_c_21?.["empty"] ? (<>
                              {" "}
                              <div style={{ "padding": "24px 12px", "textAlign": "center", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px" }}>
                                {" "}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "margin": "0 auto 8px", "display": "block" }}>
                                  <path d="M22 12h-6l-2 3h-4l-2-3H2"></path>
                                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                </svg>
                                <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373" }}>
                                  {"VACÍO"}
                                </div>
                                {" "}
                                <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#525252", "marginTop": "4px" }}>
                                  {T(_c_21?.["emptyMsg"])}
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
                      </React.Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                </>) : null}
                {" "}
              </div>
              {" "}
            </>) : null}
            {" "}
            {V["showForm"] ? (<>
              {" "}
              <div style={{ "maxWidth": "720px" }}>
                {" "}
                <div style={{ "display": "flex", "marginBottom": "16px" }}>
                  <button onClick={V["onCancelForm"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "flexShrink": "0", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpm scp4">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    {"Volver al listado"}
                  </button>
                </div>
                {" "}
                {V["draftFound"] ? (<>
                  {" "}
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start", "background": "#f5f5f5", "borderRadius": "12px", "padding": "16px", "marginBottom": "16px", "animation": "dropIn var(--duration-base) var(--ease-standard) both" }}>
                    {" "}
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5z"></path>
                      <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"></path>
                      <path d="M15 2v5h5"></path>
                    </svg>
                    {" "}
                    <div style={{ "minWidth": "0", "flex": "1" }}>
                      {" "}
                      <div style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717" }}>
                        {"Recuperamos lo que habías escrito"}
                      </div>
                      {" "}
                      <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#262626" }}>
                        {"Quedó guardado en este equipo la última vez que empezaste un ticket y no lo enviaste."}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <button onClick={V["onDropDraft"]} style={{ "flexShrink": "0", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "6px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpu scp4">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      {"Empezar de cero"}
                    </button>
                    {" "}
                  </div>
                  {" "}
                </>) : null}
                {" "}
                {V["hasFormBanner"] ? (<>
                  {" "}
                  <div style={{ "display": "flex", "gap": "8px", "alignItems": "flex-start", "background": "#fef3c7", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "12px", "marginBottom": "20px" }}>
                    {" "}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "marginTop": "2px" }}>
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                    {" "}
                    <div>
                      {" "}
                      <div style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717" }}>
                        {T(V["formBannerTitle"])}
                      </div>
                      {" "}
                      <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#262626" }}>
                        {T(V["formBannerNote"])}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </>) : null}
                {" "}
                <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "20px" }}>
                  {" "}
                  {V["formIsEdit"] ? (<>
                    {" "}
                    <div style={{ "display": "flex", "alignItems": "center", "gap": "10px", "flexWrap": "wrap", "borderBottom": "1px solid #e5e5e5", "paddingBottom": "16px" }}>
                      {" "}
                      <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em", "background": "#f5f5f5", "borderRadius": "6px", "padding": "4px 8px" }}>
                        {T(V["formCode"])}
                      </span>
                      {" "}
                      <span style={{ "fontSize": "14px", "color": "#737373" }}>
                        {"Abierto por "}{T(V["formAutor"])}{" · "}{T(V["formCreado"])}
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </>) : null}
                  {" "}
                  <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                    {" "}
                    <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                      {"Título"}
                    </label>
                    {" "}
                    <input value={(V["fTitulo"] ?? "")} onChange={V["onFTitulo"]} placeholder="Ej.: La notebook de Mesa de Partes no enciende" style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid " + S(V["errTituloBorder"]), "borderRadius": "6px", "padding": "10px 12px", "fontSize": "14px", "outline": "none" }} />
                    {" "}
                    {V["hasDupes"] ? (<>
                      {" "}
                      <div style={{ "background": "#f5f5f5", "borderRadius": "12px", "padding": "12px", "display": "flex", "flexDirection": "column", "gap": "8px", "animation": "dropIn var(--duration-base) var(--ease-standard) both" }}>
                        {" "}
                        <div style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
                          {" "}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                            <rect width="14" height="14" x="8" y="8" rx="2"></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>
                          {" "}
                          <span style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717" }}>
                            {T(V["dupesTitle"])}
                          </span>
                          {" "}
                        </div>
                        {" "}
                        <span style={{ "fontSize": "12px", "color": "#525252" }}>
                          {"Si es el mismo problema, sumá un comentario ahí en lugar de abrir otro ticket."}
                        </span>
                        {" "}
                        {L(V["dupes"]).map((_d_26, $index) => (
                          <React.Fragment key={$index}>
                            {" "}
                            <button onClick={_d_26?.["open"]} style={{ "display": "flex", "alignItems": "center", "gap": "8px", "width": "100%", "textAlign": "left", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 10px", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1f scp1g">
                              {" "}
                              <span style={{ "minWidth": "0", "flex": "1" }}>
                                {" "}
                                <span style={{ "display": "block", "fontSize": "13px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                  {T(_d_26?.["titulo"])}
                                </span>
                                {" "}
                                <span style={{ "display": "block", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "marginTop": "2px" }}>
                                  {T(_d_26?.["code"])}{" · "}{T(_d_26?.["asig"])}{" · "}{T(_d_26?.["when"])}
                                </span>
                                {" "}
                              </span>
                              {" "}
                              <span style={{ "flexShrink": "0", "background": S(_d_26?.["statusBg"]), "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "11px", "fontWeight": "500", "color": "#171717" }}>
                                {T(_d_26?.["statusLabel"])}
                              </span>
                              {" "}
                            </button>
                            {" "}
                          </React.Fragment>
                        ))}
                        {" "}
                      </div>
                      {" "}
                    </>) : null}
                    {" "}
                    {V["errTitulo"] ? (<>
                      {" "}
                      <div style={{ "display": "flex", "alignItems": "center", "gap": "6px" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                          <path d="M12 9v4"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        <span style={{ "fontSize": "12px", "color": "#262626" }}>
                          {T(V["errTituloMsg"])}
                        </span>
                      </div>
                      {" "}
                    </>) : null}
                    {" "}
                  </div>
                  {" "}
                  <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                    {" "}
                    <div style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      {" "}
                      <label htmlFor="tic-desc" style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                        {"Descripción"}
                      </label>
                      {" "}
                      {V["hasDesc"] ? (<>
                        {" "}
                        <button onClick={V["onBlankDesc"]} style={{ "marginLeft": "auto", "background": "transparent", "border": "none", "padding": "2px 4px", "fontSize": "12px", "fontWeight": "500", "color": "#525252", "cursor": "pointer", "borderRadius": "6px", "transition": "background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)" }} className="scp0 scpt">
                          {"Empezar en blanco"}
                        </button>
                        {" "}
                      </>) : null}
                      {" "}
                    </div>
                    {" "}
                    <textarea id="tic-desc" value={(V["fDesc"] ?? "")} onChange={V["onFDesc"]} rows="5" placeholder="Qué pasó, desde cuándo, y qué intentaste hasta ahora." style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid " + S(V["errDescBorder"]), "borderRadius": "6px", "padding": "10px 12px", "fontSize": "14px", "lineHeight": "1.5", "outline": "none", "resize": "vertical" }}></textarea>
                    {" "}
                    {V["errDesc"] ? (<>
                      {" "}
                      <div style={{ "display": "flex", "alignItems": "center", "gap": "6px" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                          <path d="M12 9v4"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        <span style={{ "fontSize": "12px", "color": "#262626" }}>
                          {T(V["errDescMsg"])}
                        </span>
                      </div>
                      {" "}
                    </>) : null}
                    {" "}
                  </div>
                  {" "}
                  <div style={{ "display": "flex", "gap": "16px", "flexWrap": "wrap" }}>
                    {" "}
                    <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "width": "320px", "maxWidth": "100%" }}>
                      {" "}
                      <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                        {"Categoría"}
                      </label>
                      {" "}
                      <div style={{ "position": "relative" }}>
                        {" "}
                        <select value={(V["fCat"] ?? "")} onChange={V["onFCat"]} style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid " + S(V["errCatBorder"]), "borderRadius": "6px", "padding": "10px 34px 10px 12px", "fontSize": "14px", "outline": "none", "appearance": "none", "WebkitAppearance": "none" }}>
                          {" "}
                          <option value="">
                            {"Elegí una categoría"}
                          </option>
                          {" "}
                          {L(V["activeCats"]).map((_c_27, $index) => (
                            <React.Fragment key={$index}>
                              {" "}
                              <option value={(_c_27?.["value"] ?? "")}>
                                {T(_c_27?.["nombre"])}
                              </option>
                              {" "}
                            </React.Fragment>
                          ))}
                          {" "}
                        </select>
                        {" "}
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "position": "absolute", "right": "11px", "top": "50%", "transform": "translateY(-50%)", "pointerEvents": "none" }}>
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                        {" "}
                      </div>
                      {" "}
                      {V["errCat"] ? (<>
                        {" "}
                        <div style={{ "display": "flex", "alignItems": "center", "gap": "6px" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                            <path d="M12 9v4"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                          <span style={{ "fontSize": "12px", "color": "#262626" }}>
                            {"Elegí la categoría que mejor describe el problema."}
                          </span>
                        </div>
                        {" "}
                      </>) : null}
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  {V["formCanManage"] ? (<>
                    {" "}
                    <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(220px,1fr))", "gap": "16px", "borderTop": "1px solid #e5e5e5", "paddingTop": "20px" }}>
                      {" "}
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                        {" "}
                        <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                          {"Estado"}
                        </label>
                        {" "}
                        <div style={{ "position": "relative" }}>
                          {" "}
                          <select value={(V["fStatus"] ?? "")} onChange={V["onFStatus"]} disabled={V["fStatusLocked"]} title={V["fStatusTitle"]} style={{ "opacity": S(V["fStatusOp"]), "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid #000000", "borderRadius": "6px", "padding": "10px 34px 10px 12px", "fontSize": "14px", "outline": "none", "appearance": "none", "WebkitAppearance": "none" }}>
                            {" "}
                            <option value="open">
                              {"Abierto"}
                            </option>
                            {" "}
                            <option value="in_progress">
                              {"En progreso"}
                            </option>
                            {" "}
                            <option value="closed" disabled={V["fClosedOptOff"]}>
                              {"Cerrado"}
                            </option>
                            {" "}
                          </select>
                          {" "}
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "position": "absolute", "right": "11px", "top": "50%", "transform": "translateY(-50%)", "pointerEvents": "none" }}>
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                        {" "}
                        <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                          {"Prioridad"}
                        </label>
                        {" "}
                        <div style={{ "position": "relative" }}>
                          {" "}
                          <select value={(V["fPrio"] ?? "")} onChange={V["onFPrio"]} style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid #000000", "borderRadius": "6px", "padding": "10px 34px 10px 12px", "fontSize": "14px", "outline": "none", "appearance": "none", "WebkitAppearance": "none" }}>
                            {" "}
                            <option value="low">
                              {"Baja"}
                            </option>
                            {" "}
                            <option value="medium">
                              {"Media"}
                            </option>
                            {" "}
                            <option value="high">
                              {"Alta"}
                            </option>
                            {" "}
                          </select>
                          {" "}
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "position": "absolute", "right": "11px", "top": "50%", "transform": "translateY(-50%)", "pointerEvents": "none" }}>
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </>) : null}
                  {" "}
                  {V["formRoleNote"] ? (<>
                    {" "}
                    <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.02em" }}>
                      {"ESTADO Y PRIORIDAD LOS GESTIONA UN ADMIN"}
                    </div>
                    {" "}
                  </>) : null}
                  {" "}
                  {V["formIsCreate"] ? (<>
                    {" "}
                    <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start", "background": "#ebede7", "borderRadius": "16px", "padding": "16px" }}>
                      {" "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      {" "}
                      <div style={{ "minWidth": "0" }}>
                        {" "}
                        <div style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717" }}>
                          {"Al enviarlo se notifica por correo a los administradores del área"}
                        </div>
                        {" "}
                        <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#525252", "marginTop": "2px" }}>
                          {"El estado entra como "}
                          <strong style={{ "fontWeight": "500" }}>
                            {"Abierto"}
                          </strong>
                          {" y la prioridad la asigna el sistema al recibirlo — un admin puede cambiarla después."}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </>) : null}
                  {" "}
                  {V["formIsEdit"] ? (<>
                    {" "}
                    <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start", "background": "#ebede7", "borderRadius": "16px", "padding": "16px" }}>
                      {" "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                        <path d="M3 3v5h5"></path>
                        <path d="M12 7v5l4 2"></path>
                      </svg>
                      {" "}
                      <div style={{ "minWidth": "0" }}>
                        {" "}
                        <div style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717" }}>
                          {"Los datos vienen cargados: cambiá solo lo que haga falta"}
                        </div>
                        {" "}
                        <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#525252", "marginTop": "2px" }}>
                          {"Cada cambio queda registrado en el historial del ticket con tu nombre."}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </>) : null}
                  {" "}
                  <div style={{ "display": "flex", "gap": "8px", "borderTop": "1px solid #e5e5e5", "paddingTop": "20px" }}>
                    {" "}
                    <button onClick={V["onSubmitForm"]} style={{ "position": "relative", "overflow": "hidden", "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "12px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)" }} className="scp1h scp2">
                      {V["rippleForm"] ? (<>
                        <span aria-hidden="true" style={{ "position": "absolute", "left": "50%", "top": "50%", "width": "120px", "height": "120px", "margin": "-60px 0 0 -60px", "borderRadius": "9999px", "background": "#ffffff", "animation": "ripple 560ms var(--ease-standard) both", "pointerEvents": "none" }}></span>
                      </>) : null}
                      <span style={{ "opacity": S(V["busyFormOp"]), "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "opacity var(--duration-fast) var(--ease-standard)" }}>
                        {V["formIsCreate"] ? (<>
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": S(V["tapForm"]), "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)" }}>
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </>) : null}
                        {V["formIsEdit"] ? (<>
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": S(V["tapForm"]), "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)" }}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </>) : null}
                        {T(V["formOkLabel"])}
                      </span>
                      {V["busyForm"] ? (<>
                        <span style={{ "position": "absolute", "inset": "0", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                          <span style={{ "width": "16px", "height": "16px", "borderRadius": "9999px", "border": "2px solid #ffffff", "borderTopColor": "transparent", "animation": "spin 600ms linear infinite" }}></span>
                        </span>
                      </>) : null}
                    </button>
                    {" "}
                    <button onClick={V["onCancelForm"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "12px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpx scpd">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      {"Cancelar"}
                    </button>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </>) : null}
            {" "}
            {V["showDetail"] ? (<>
              {" "}
              <div>
                {" "}
                <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "flexWrap": "wrap", "marginBottom": "16px" }}>
                  {" "}
                  <button onClick={V["onBack"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scpm scp4">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    {"Volver al listado"}
                  </button>
                  {" "}
                  <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "background": S(V["dStatusBg"]), "borderRadius": "9999px", "padding": "6px 12px", "fontSize": "12px", "fontWeight": "500", "color": "#171717" }}>
                    {V["dStatusOpen"] ? (<>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={V["dStatusDot"]} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="1" fill={V["dStatusDot"]}></circle>
                      </svg>
                    </>) : null}
                    {V["dStatusProg"] ? (<>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={V["dStatusDot"]} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                    </>) : null}
                    {V["dStatusClosed"] ? (<>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={V["dStatusDot"]} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                    </>) : null}
                    {T(V["dStatusLabel"])}
                  </span>
                  {" "}
                  <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "11px", "fontWeight": "500", "color": "#404040" }}>
                    {" "}
                    <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(V["dPrioDot"]) }}></span>
                    {"Prioridad "}{T(V["dPrioLabel"])}{" "}
                  </span>
                  {" "}
                  <div style={{ "marginLeft": "auto", "display": "flex", "gap": "8px" }}>
                    {" "}
                    {V["canEdit"] ? (<>
                      {" "}
                      <button onClick={V["onEditTicket"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp1i scp4">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,rotate(0deg) scale(1)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                        </svg>
                        {"Editar"}
                      </button>
                      {" "}
                    </>) : null}
                    {" "}
                    {V["canClose"] ? (<>
                      {" "}
                      <button onClick={V["onAskClose"]} style={{ "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "8px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp1j scp2">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": S(V["tapClose"]), "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)" }}>
                          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        {"Cerrar ticket"}
                      </button>
                      {" "}
                    </>) : null}
                    {" "}
                    {V["canTakeDetail"] ? (<>
                      {" "}
                      <button onClick={V["onTakeDetail"]} style={{ "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "8px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1k scp2">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": S(V["tapTakeDetail"]), "transform": "var(--im,translateY(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)" }}>
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M19 8v6"></path>
                          <path d="M22 11h-6"></path>
                        </svg>
                        {"Tomar este ticket"}
                      </button>
                      {" "}
                    </>) : null}
                    {" "}
                    {V["dResolvedShow"] ? (<>
                      {" "}
                      <button onClick={V["onResolved"]} disabled={V["dResolvedDis"]} aria-disabled={V["dResolvedDis"]} title="Le avisa al área que ya funciona para que lo cierre" style={{ "opacity": S(V["dResolvedOp"]), "cursor": S(V["dResolvedCur"]), "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpq scp4">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        {T(V["dResolvedLabel"])}
                      </button>
                      {" "}
                    </>) : null}
                    {" "}
                    {V["dFollowShow"] ? (<>
                      {" "}
                      <button onClick={V["onFollowUp"]} title="Abre un ticket nuevo que menciona a este" style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpq scp4">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                        </svg>
                        {"Sigue pasando"}
                      </button>
                      {" "}
                    </>) : null}
                    {" "}
                    {V["canReopen"] ? (<>
                      {" "}
                      <button onClick={V["onReopen"]} title="Vuelve a estado Abierto y queda registrado en la actividad" style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp1l scp4">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": S(V["tapReopen"]), "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                        </svg>
                        {"Reabrir ticket"}
                      </button>
                      {" "}
                    </>) : null}
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                {V["loading"] ? (<>
                  {" "}
                  <div data-detail-grid="" style={{ "display": "grid", "gridTemplateColumns": "minmax(0,1.7fr) minmax(260px,320px)", "gap": "16px", "alignItems": "start" }}>
                    {" "}
                    <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "minWidth": "0" }}>
                      {" "}
                      <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                        {" "}
                        <span style={{ "display": "block", "width": "76%", "height": "30px", "borderRadius": "8px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                        {" "}
                        <span style={{ "display": "block", "width": "42%", "height": "11px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                        {" "}
                        <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "marginTop": "8px" }}>
                          {" "}
                          <span style={{ "display": "block", "width": "100%", "height": "16px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                          {" "}
                          <span style={{ "display": "block", "width": "94%", "height": "16px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                          {" "}
                          <span style={{ "display": "block", "width": "68%", "height": "16px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "16px" }}>
                        {" "}
                        <span style={{ "display": "block", "width": "120px", "height": "16px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                        {" "}
                        <div style={{ "display": "flex", "gap": "12px" }}>
                          {" "}
                          <span style={{ "display": "block", "width": "32px", "height": "32px", "borderRadius": "9999px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                          {" "}
                          <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "flex": "1" }}>
                            {" "}
                            <span style={{ "display": "block", "width": "38%", "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                            {" "}
                            <span style={{ "display": "block", "width": "86%", "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div style={{ "display": "flex", "gap": "12px" }}>
                          {" "}
                          <span style={{ "display": "block", "width": "32px", "height": "32px", "borderRadius": "9999px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                          {" "}
                          <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "flex": "1" }}>
                            {" "}
                            <span style={{ "display": "block", "width": "32%", "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                            {" "}
                            <span style={{ "display": "block", "width": "72%", "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "minWidth": "0" }}>
                      {" "}
                      <div style={{ "background": "#ebede7", "borderRadius": "16px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                        {" "}
                        <span style={{ "display": "block", "width": "72px", "height": "11px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                        {" "}
                        <span style={{ "display": "block", "width": "100%", "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                        {" "}
                        <span style={{ "display": "block", "width": "100%", "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                        {" "}
                        <span style={{ "display": "block", "width": "80%", "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                        {" "}
                      </div>
                      {" "}
                      <div style={{ "background": "#ebede7", "borderRadius": "16px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                        {" "}
                        <span style={{ "display": "block", "width": "64px", "height": "11px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                        {" "}
                        <span style={{ "display": "block", "width": "100%", "height": "120px", "borderRadius": "8px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </>) : null}
                {" "}
                {V["loaded"] ? (<>
                  {" "}
                  <div data-detail-grid="" style={{ "display": "grid", "gridTemplateColumns": "minmax(0,1.7fr) minmax(260px,320px)", "gap": "16px", "alignItems": "start" }}>
                    {" "}
                    <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "minWidth": "0" }}>
                      {" "}
                      <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "24px" }}>
                        {" "}
                        <h2 style={{ "fontSize": "30px", "lineHeight": "1.38", "fontWeight": "500", "letterSpacing": "-0.01em", "margin": "0", "color": "#171717", "textWrap": "pretty" }}>
                          {T(V["dTitulo"])}
                        </h2>
                        {" "}
                        <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "lineHeight": "1.5", "color": "#737373", "marginTop": "6px", "letterSpacing": "0.02em" }}>
                          {T(V["dCode"])}{" · ABIERTO POR "}{T(V["dAutor"])}{" · "}{T(V["dCreado"])}
                        </div>
                        {" "}
                        <p style={{ "fontSize": "16px", "lineHeight": "1.5", "color": "#262626", "margin": "16px 0 0", "textWrap": "pretty" }}>
                          {T(V["dDesc"])}
                        </p>
                        {" "}
                      </div>
                      {" "}
                      <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "24px" }}>
                        {" "}
                        <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "flexWrap": "wrap", "marginBottom": "16px" }}>
                          {" "}
                          <h3 style={{ "fontSize": "16px", "fontWeight": "600", "margin": "0", "color": "#171717" }}>
                            {"Actividad"}
                          </h3>
                          {" "}
                          <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373" }}>
                            {T(V["dActivityCount"])}
                          </span>
                          {" "}
                          <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em", "minWidth": "0" }}>
                            {"COMENTARIOS · CAMBIOS · ADJUNTOS"}
                          </span>
                          {" "}
                          {V["canChatDetail"] ? (<>
                            {" "}
                            <button onClick={V["onChatFromDetail"]} title="Abre los comentarios como conversación, sin salir de la pantalla" style={{ "marginLeft": "auto", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px 10px", "fontSize": "12px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "6px", "whiteSpace": "nowrap", "flexShrink": "0", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scpi scp4">
                              {" "}
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                              </svg>
                              {"Abrir como chat "}
                            </button>
                            {" "}
                          </>) : null}
                          {" "}
                        </div>
                        {" "}
                        <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px" }}>
                          {" "}
                          {L(V["dActivity"]).map((_a_28, $index) => (
                            <React.Fragment key={$index}>
                              {" "}
                              <div key={_a_28?.["key"]} style={{ "display": "flex", "gap": "12px", "animation": "commentIn var(--duration-base) var(--ease-standard) both" }}>
                                {" "}
                                <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "width": "32px", "flexShrink": "0", "alignSelf": "stretch" }}>
                                  {" "}
                                  {_a_28?.["isComment"] ? (<>
                                    {" "}
                                    {_a_28?.["hasBlob"] ? (<>
                                      {" "}
                                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" ref={_a_28?.["blobRef"]} alt="" style={{ "width": "32px", "height": "32px", "flexShrink": "0", "borderRadius": "9999px", "background": "#f5f5f5", "border": "1px solid " + S(_a_28?.["ring"]), "display": "block" }} />
                                      {" "}
                                    </>) : null}
                                    {" "}
                                    {_a_28?.["noBlob"] ? (<>
                                      {" "}
                                      <div style={{ "width": "32px", "height": "32px", "flexShrink": "0", "borderRadius": "9999px", "background": "#f5f5f5", "border": "1px solid " + S(_a_28?.["ring"]), "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                                        {T(_a_28?.["ini"])}
                                      </div>
                                      {" "}
                                    </>) : null}
                                    {" "}
                                  </>) : null}
                                  {" "}
                                  {_a_28?.["isEvent"] ? (<>
                                    {" "}
                                    <div style={{ "width": "32px", "height": "32px", "flexShrink": "0", "borderRadius": "9999px", "background": "#ffffff", "border": "1px solid #e5e5e5", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                                      <span style={{ "width": "7px", "height": "7px", "borderRadius": "9999px", "background": S(_a_28?.["node"]) }}></span>
                                    </div>
                                    {" "}
                                  </>) : null}
                                  {" "}
                                  {_a_28?.["isFile"] ? (<>
                                    {" "}
                                    <div style={{ "width": "32px", "height": "32px", "flexShrink": "0", "borderRadius": "9999px", "background": "#ffffff", "border": "1px solid #e5e5e5", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                        <circle cx="9" cy="9" r="2"></circle>
                                        <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"></path>
                                      </svg>
                                    </div>
                                    {" "}
                                  </>) : null}
                                  {" "}
                                  {_a_28?.["showLine"] ? (<>
                                    {" "}
                                    <span style={{ "flex": "1", "width": "1px", "minHeight": "12px", "background": "#e5e5e5", "marginTop": "6px" }}></span>
                                    {" "}
                                  </>) : null}
                                  {" "}
                                </div>
                                {" "}
                                <div style={{ "minWidth": "0", "flex": "1", "paddingBottom": "4px" }}>
                                  {" "}
                                  <div style={{ "display": "flex", "alignItems": "baseline", "gap": "8px", "flexWrap": "wrap" }}>
                                    {" "}
                                    <span style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717" }}>
                                      {T(_a_28?.["autor"])}
                                    </span>
                                    {" "}
                                    <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373" }}>
                                      {T(_a_28?.["when"])}
                                    </span>
                                    {" "}
                                    {_a_28?.["isEvent"] ? (<>
                                      {" "}
                                      <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
                                        {T(_a_28?.["meta"])}
                                      </span>
                                      {" "}
                                    </>) : null}
                                    {" "}
                                  </div>
                                  {" "}
                                  <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#262626", "marginTop": "2px", "textWrap": "pretty" }}>
                                    {T(_a_28?.["texto"])}
                                  </div>
                                  {" "}
                                  {_a_28?.["isFile"] ? (<>
                                    {" "}
                                    <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "marginTop": "2px" }}>
                                      {T(_a_28?.["meta"])}
                                    </div>
                                    {" "}
                                  </>) : null}
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </React.Fragment>
                          ))}
                          {" "}
                          {V["dNoComments"] ? (<>
                            {" "}
                            <div style={{ "background": "#f5f5f5", "borderRadius": "12px", "padding": "20px", "textAlign": "center" }}>
                              {" "}
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "margin": "0 auto 8px", "display": "block" }}>
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                              </svg>
                              <div style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717" }}>
                                {"Todavía nadie comentó"}
                              </div>
                              {" "}
                              <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "marginTop": "2px" }}>
                                {"Sumá contexto o pedí datos al solicitante para avanzar."}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </>) : null}
                          {" "}
                        </div>
                        {" "}
                        <div style={{ "borderTop": "1px solid #e5e5e5", "marginTop": "20px", "paddingTop": "16px", "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                          {" "}
                          {V["dNudgeAsk"] ? (<>
                            {" "}
                            <div style={{ "display": "flex", "gap": "8px", "alignItems": "flex-start", "background": "#dbeaff", "borderRadius": "8px", "padding": "12px", "marginBottom": "4px" }}>
                              {" "}
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                              {" "}
                              <span style={{ "minWidth": "0" }}>
                                {" "}
                                <span style={{ "display": "block", "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717" }}>
                                  {"Te están esperando"}
                                </span>
                                {" "}
                                <span style={{ "display": "block", "fontSize": "14px", "lineHeight": "1.43", "color": "#262626", "marginTop": "2px", "textWrap": "pretty" }}>
                                  {"Respondé acá abajo para destrabarlo."}
                                </span>
                                {" "}
                              </span>
                              {" "}
                              <button onClick={V["onFocusComment"]} style={{ "marginLeft": "auto", "flexShrink": "0", "background": "#ffffff", "color": "#171717", "border": "1px solid #d4d4d4", "borderRadius": "8px", "padding": "6px 10px", "fontSize": "12px", "fontWeight": "500", "cursor": "pointer", "whiteSpace": "nowrap", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpg scp4">
                                {"Responder"}
                              </button>
                              {" "}
                            </div>
                            {" "}
                          </>) : null}
                          {" "}
                          {V["dNudgeShow"] ? (<>
                            {" "}
                            <div style={{ "display": "flex", "flexDirection": "column", "gap": "4px", "marginBottom": "4px" }}>
                              {" "}
                              <button onClick={V["onNudge"]} title={V["dNudgeTitle"]} style={{ "alignSelf": "flex-start", "background": "#fef3c7", "color": "#171717", "border": "1px solid #ea580c", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": S(V["dNudgeCursor"]), "opacity": S(V["dNudgeOp"]), "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1m scpd">
                                {" "}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#ea580c)" }}>
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                {"Esto me está frenando "}
                              </button>
                              {" "}
                              <span style={{ "fontSize": "12px", "lineHeight": "1.43", "color": "#525252", "textWrap": "pretty" }}>
                                {T(V["dNudgeNote"])}
                              </span>
                              {" "}
                            </div>
                            {" "}
                          </>) : null}
                          {" "}
                          {V["dReplyLocked"] ? (<>
                            {" "}
                            <div role="note" style={{ "display": "flex", "gap": "10px", "alignItems": "center", "background": "#f5f5f5", "borderRadius": "10px", "padding": "10px 12px" }}>
                              {" "}
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                              </svg>
                              {" "}
                              <span style={{ "minWidth": "0", "flex": "1", "fontSize": "13px", "lineHeight": "1.45", "color": "#262626", "textWrap": "pretty" }}>
                                {T(V["dReplyLockMsg"])}
                              </span>
                              {" "}
                              {V["dReplyLockTake"] ? (<>
                                {" "}
                                <button onClick={V["dReplyOnTake"]} style={{ "flexShrink": "0", "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "13px", "fontWeight": "500", "cursor": "pointer", "whiteSpace": "nowrap", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1n scp6">
                                  {T(V["dReplyTakeLabel"])}
                                </button>
                                {" "}
                              </>) : null}
                              {" "}
                            </div>
                            {" "}
                          </>) : null}
                          {" "}
                          {V["dCanReply"] ? (<>
                            {" "}
                            <div style={{ "display": "flex", "alignItems": "center", "gap": "6px", "flexWrap": "wrap" }}>
                              {" "}
                              <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em", "marginRight": "2px" }}>
                                {"RESPUESTAS GUARDADAS"}
                              </span>
                              {" "}
                              {L(V["macros"]).map((_m_29, $index) => (
                                <React.Fragment key={$index}>
                                  {" "}
                                  <button onClick={_m_29?.["use"]} style={{ "background": "#ffffff", "color": "#404040", "border": "1px solid #e5e5e5", "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "11px", "fontWeight": "500", "cursor": "pointer", "whiteSpace": "nowrap", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp1o scp4">
                                    {T(_m_29?.["label"])}
                                  </button>
                                  {" "}
                                </React.Fragment>
                              ))}
                              {" "}
                            </div>
                            {" "}
                            <textarea id="tic-comment" value={(V["comment"] ?? "")} onChange={V["onComment"]} rows="3" placeholder={V["commentPh"]} style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid #000000", "borderRadius": "6px", "padding": "10px 12px", "fontSize": "14px", "lineHeight": "1.5", "outline": "none", "resize": "vertical" }}></textarea>
                            {" "}
                            <div style={{ "display": "flex", "alignItems": "center", "gap": "6px" }}>
                              {" "}
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2"></path>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                              </svg>
                              {" "}
                              <span style={{ "fontSize": "12px", "color": "#525252", "textWrap": "pretty" }}>
                                {T(V["dMailNote"])}
                              </span>
                              {" "}
                            </div>
                            {" "}
                            {V["hasDraft"] ? (<>
                              {" "}
                              <div style={{ "display": "flex", "alignItems": "center", "gap": "6px" }}>
                                {" "}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                  <path d="m9 11 3 3L22 4"></path>
                                </svg>
                                {" "}
                                <span style={{ "fontSize": "12px", "color": "#525252" }}>
                                  {T(V["draftLine"])}
                                </span>
                                {" "}
                              </div>
                              {" "}
                            </>) : null}
                            {" "}
                            {V["commentErr"] ? (<>
                              {" "}
                              <div style={{ "display": "flex", "alignItems": "center", "gap": "6px" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                <span style={{ "fontSize": "12px", "color": "#262626" }}>
                                  {T(V["commentErr"])}
                                </span>
                              </div>
                              {" "}
                            </>) : null}
                            {" "}
                            <div style={{ "display": "flex", "gap": "8px", "flexWrap": "wrap" }}>
                              {" "}
                              <button onClick={V["onAddComment"]} style={{ "position": "relative", "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "10px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp1p scpv">
                                <span style={{ "opacity": S(V["busyCommentOp"]), "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "opacity var(--duration-fast) var(--ease-standard)" }}>
                                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": S(V["tapComment"]), "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,translate(0,0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)" }}>
                                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                    <path d="m21.854 2.147-10.94 10.939"></path>
                                  </svg>
                                  {"Publicar comentario"}
                                </span>
                                {V["busyComment"] ? (<>
                                  <span style={{ "position": "absolute", "inset": "0", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                                    <span style={{ "width": "16px", "height": "16px", "borderRadius": "9999px", "border": "2px solid #ffffff", "borderTopColor": "transparent", "animation": "spin 600ms linear infinite" }}></span>
                                  </span>
                                </>) : null}
                              </button>
                              {" "}
                              {V["canClose"] ? (<>
                                {" "}
                                <button onClick={V["onCommentAndClose"]} title="Publica la respuesta y cierra el ticket en un solo paso" style={{ "position": "relative", "background": "#fef3c7", "color": "#171717", "border": "1px solid #ea580c", "borderRadius": "8px", "padding": "10px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1m scp4">
                                  <span style={{ "opacity": S(V["busyCommentCloseOp"]), "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "opacity var(--duration-fast) var(--ease-standard)" }}>
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": S(V["tapCommentClose"]), "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#ea580c)" }}>
                                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                      <path d="m9 11 3 3L22 4"></path>
                                    </svg>
                                    {"Comentar y cerrar"}
                                  </span>
                                  {V["busyCommentClose"] ? (<>
                                    <span style={{ "position": "absolute", "inset": "0", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                                      <span style={{ "width": "16px", "height": "16px", "borderRadius": "9999px", "border": "2px solid #171717", "borderTopColor": "transparent", "animation": "spin 600ms linear infinite" }}></span>
                                    </span>
                                  </>) : null}
                                </button>
                                {" "}
                              </>) : null}
                              {" "}
                            </div>
                            {" "}
                            {V["canClose"] ? (<>
                              {" "}
                              <span style={{ "fontSize": "12px", "color": "#525252", "textWrap": "pretty" }}>
                                {"Es el único mensaje que le llega por correo."}
                              </span>
                              {" "}
                            </>) : null}
                            {" "}
                          </>) : null}
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "minWidth": "0" }}>
                      {" "}
                      <div style={{ "background": "#ebede7", "borderRadius": "16px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                        {" "}
                        <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.12em", "display": "flex", "alignItems": "center", "gap": "12px" }}>
                          <span aria-hidden="true" style={{ "width": "28px", "height": "1px", "background": "#a3a3a3", "flexShrink": "0" }}></span>
                          {"DETALLE"}
                        </div>
                        {" "}
                        <div style={{ "display": "flex", "justifyContent": "space-between", "gap": "8px" }}>
                          <span style={{ "fontSize": "14px", "color": "#525252" }}>
                            {"Categoría"}
                          </span>
                          <span style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717", "textAlign": "right" }}>
                            {T(V["dCat"])}
                          </span>
                        </div>
                        {" "}
                        <div style={{ "display": "flex", "justifyContent": "space-between", "gap": "8px" }}>
                          <span style={{ "fontSize": "14px", "color": "#525252" }}>
                            {"Solicitante"}
                          </span>
                          <span style={{ "display": "flex", "alignItems": "center", "gap": "6px", "justifyContent": "flex-end", "minWidth": "0" }}>
                            <span style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717", "textAlign": "right" }}>
                              {T(V["dAutor"])}
                            </span>
                            {V["dAutorCall"] ? (<>
                              <a href={V["dAutorTeams"]} onClick={V["onCallAutor"]} target="_blank" rel="noreferrer" title={"Llamar por Teams a " + S(V["dAutor"])} aria-label={"Llamar por Teams a " + S(V["dAutor"])} style={{ "flexShrink": "0", "display": "flex", "alignItems": "center", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "4px", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scpg">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                                </svg>
                              </a>
                            </>) : null}
                          </span>
                        </div>
                        {" "}
                        <div style={{ "display": "flex", "justifyContent": "space-between", "gap": "8px" }}>
                          <span style={{ "fontSize": "14px", "color": "#525252" }}>
                            {"Asignado"}
                          </span>
                          <span style={{ "display": "flex", "alignItems": "center", "gap": "6px", "justifyContent": "flex-end", "minWidth": "0" }}>
                            <span style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717", "textAlign": "right" }}>
                              {T(V["dAsig"])}
                            </span>
                            {V["dAsigCall"] ? (<>
                              <a href={V["dAsigTeams"]} onClick={V["onCallAsig"]} target="_blank" rel="noreferrer" title={"Llamar por Teams a " + S(V["dAsig"])} aria-label={"Llamar por Teams a " + S(V["dAsig"])} style={{ "flexShrink": "0", "display": "flex", "alignItems": "center", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "4px", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scpg">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                                </svg>
                              </a>
                            </>) : null}
                          </span>
                        </div>
                        {" "}
                        <div style={{ "display": "flex", "justifyContent": "space-between", "gap": "8px" }}>
                          <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "fontSize": "14px", "color": "#525252" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 6v6l4 2"></path>
                            </svg>
                            {"Actualizado"}
                          </span>
                          <span style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717", "textAlign": "right" }}>
                            {T(V["dUpdated"])}
                          </span>
                        </div>
                        {" "}
                        <div style={{ "display": "flex", "justifyContent": "space-between", "gap": "8px" }}>
                          <span style={{ "fontSize": "14px", "color": "#525252" }}>
                            {T(V["dFirstLabel"])}
                          </span>
                          <span style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717", "textAlign": "right" }}>
                            {T(V["dFirstResp"])}
                          </span>
                        </div>
                        {" "}
                        {V["dSlaBlock"] ? (<>
                          {" "}
                          <div style={{ "borderTop": "1px solid #e5e5e5", "paddingTop": "12px", "display": "flex", "flexDirection": "column", "gap": "6px" }}>
                            {" "}
                            <span title={V["dSlaFull"]} style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "alignSelf": "flex-start", "background": S(V["dSlaBg"]), "border": S(V["dSlaBorder"]), "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "11px", "fontWeight": "500", "color": S(V["dSlaInk"]) }}>
                              {" "}
                              {V["dSlaLate"] ? (<>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                              </>) : null}
                              {" "}
                              {V["dSlaWatch"] ? (<>
                                <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": "#ea580c", "flexShrink": "0" }}></span>
                              </>) : null}
                              {" "}
                              {V["dSlaOk"] ? (<>
                                <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": "#16a34a", "flexShrink": "0" }}></span>
                              </>) : null}
                              {" "}
                              {V["dSlaWaiting"] ? (<>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                              </>) : null}
                              {" "}
                              {V["dSlaDone"] ? (<>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                  <path d="m9 11 3 3L22 4"></path>
                                </svg>
                              </>) : null}
                              <span style={{ "color": "#171717" }}>
                                {T(V["dSlaLabel"])}
                              </span>
                              {" "}
                            </span>
                            {" "}
                            {V["dShowMeta"] ? (<>
                              {" "}
                              <span style={{ "fontSize": "12px", "color": "#525252", "textWrap": "pretty" }}>
                                {T(V["dSlaTarget"])}
                              </span>
                              {" "}
                            </>) : null}
                            {" "}
                            {V["fuOn"] ? (<>
                              {" "}
                              <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "14px", "display": "flex", "flexDirection": "column", "gap": "12px", "marginTop": "4px", "animation": "dropIn var(--duration-base) var(--ease-standard) both" }}>
                                {" "}
                                <div style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
                                  {" "}
                                  <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
                                    {"SEGUIMIENTO AUTOMÁTICO"}
                                  </span>
                                  {" "}
                                  <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252" }}>
                                    {T(V["fuLeft"])}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div style={{ "height": "3px", "borderRadius": "9999px", "background": "#f5f5f5", "overflow": "hidden" }}>
                                  <div style={{ "height": "100%", "borderRadius": "9999px", "background": "#2563eb", "width": S(V["fuPct"]), "transition": "width var(--duration-page) var(--ease-standard)" }}></div>
                                </div>
                                {" "}
                                <div style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
                                  {" "}
                                  {L(V["fuSteps"]).map((_st_30, $index) => (
                                    <React.Fragment key={$index}>
                                      {" "}
                                      <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                                        {" "}
                                        <span style={{ "width": "16px", "height": "16px", "borderRadius": "9999px", "flexShrink": "0", "marginTop": "2px", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": S(_st_30?.["dotBg"]), "border": "1px solid " + S(_st_30?.["dotBorder"]) }}>
                                          {" "}
                                          {_st_30?.["done"] ? (<>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                              <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                          </>) : null}
                                          {" "}
                                        </span>
                                        {" "}
                                        <div style={{ "minWidth": "0" }}>
                                          {" "}
                                          <div style={{ "fontSize": "13px", "lineHeight": "1.4", "fontWeight": "500", "color": "#171717" }}>
                                            {T(_st_30?.["label"])}
                                          </div>
                                          {" "}
                                          <div style={{ "fontSize": "12px", "lineHeight": "1.4", "color": "#525252", "textWrap": "pretty" }}>
                                            {T(_st_30?.["sub"])}
                                          </div>
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
                                {V["fuCanRemind"] ? (<>
                                  {" "}
                                  <button onClick={V["onRemindNow"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1q scp4">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": S(V["tapRemind"]), "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "50% 10%", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                      <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                    </svg>
                                    {"Recordar ahora"}
                                  </button>
                                  {" "}
                                </>) : null}
                                {" "}
                              </div>
                              {" "}
                            </>) : null}
                            {" "}
                            {V["stuckOn"] ? (<>
                              {" "}
                              <div style={{ "background": "#fef3c7", "border": "1px solid #ea580c", "borderRadius": "12px", "padding": "14px", "display": "flex", "flexDirection": "column", "gap": "10px", "marginTop": "4px", "animation": "dropIn var(--duration-base) var(--ease-standard) both" }}>
                                {" "}
                                <div style={{ "display": "flex", "gap": "8px", "alignItems": "flex-start" }}>
                                  {" "}
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "marginTop": "2px" }}>
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                  </svg>
                                  {" "}
                                  <div style={{ "minWidth": "0" }}>
                                    {" "}
                                    <div style={{ "fontSize": "13px", "lineHeight": "1.4", "fontWeight": "500", "color": "#171717" }}>
                                      {T(V["stuckTitle"])}
                                    </div>
                                    {" "}
                                    <div style={{ "fontSize": "12px", "lineHeight": "1.4", "color": "#262626", "textWrap": "pretty" }}>
                                      {T(V["stuckSub"])}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <button onClick={V["onStuckReassign"]} style={{ "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1 scpv">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                                    <path d="m16 3 4 4-4 4"></path>
                                    <path d="M20 7H4"></path>
                                    <path d="m8 21-4-4 4-4"></path>
                                    <path d="M4 17h16"></path>
                                  </svg>
                                  {T(V["stuckBtn"])}
                                </button>
                                {" "}
                              </div>
                              {" "}
                            </>) : null}
                            {" "}
                          </div>
                          {" "}
                        </>) : null}
                        {" "}
                      </div>
                      {" "}
                      {V["canAssign"] ? (<>
                        {" "}
                        <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "8px", "animation": "dropIn var(--duration-base) var(--ease-standard) both" }}>
                          {" "}
                          <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "letterSpacing": "0.04em" }}>
                            {"ASIGNACIÓN · ADMIN"}
                          </div>
                          {" "}
                          <div style={{ "position": "relative" }}>
                            {" "}
                            <button onClick={V["onToggleAsig"]} aria-label="Cambiar asignación" style={{ "width": "100%", "display": "flex", "alignItems": "center", "gap": "10px", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 10px", "cursor": "pointer", "textAlign": "left", "transition": "background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scpi scpt">
                              {" "}
                              {V["asigHasPerson"] ? (<>
                                {" "}
                                <span style={{ "width": "28px", "height": "28px", "flexShrink": "0", "borderRadius": "9999px", "background": "#f5f5f5", "border": "1px solid " + S(V["asigBtnRing"]), "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "11px", "fontWeight": "600", "color": "#171717" }}>
                                  {T(V["asigBtnIni"])}
                                </span>
                                {" "}
                              </>) : null}
                              {" "}
                              {V["asigNone"] ? (<>
                                {" "}
                                <span style={{ "width": "28px", "height": "28px", "flexShrink": "0", "borderRadius": "9999px", "background": "#ffffff", "border": "1px dashed #d4d4d4", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                                  <svg style={{ "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#737373)" }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M19 8v6"></path>
                                    <path d="M22 11h-6"></path>
                                  </svg>
                                </span>
                                {" "}
                              </>) : null}
                              {" "}
                              <span style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717", "minWidth": "0", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                {T(V["asigBtnLabel"])}
                              </span>
                              {" "}
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "marginLeft": "auto", "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                              {" "}
                            </button>
                            {" "}
                            {V["asigOpen"] ? (<>
                              {" "}
                              <div role="dialog" aria-label="Elegir responsable" style={{ "position": "absolute", "top": "calc(100% + 6px)", "left": "0", "right": "0", "zIndex": "30", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "8px", "display": "flex", "flexDirection": "column", "gap": "2px", "boxShadow": "rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px", "animation": "dropIn var(--duration-base) var(--ease-standard) both" }}>
                                {" "}
                                {L(V["assignables"]).map((_u_31, $index) => (
                                  <React.Fragment key={$index}>
                                    {" "}
                                    <button onClick={_u_31?.["pick"]} title={_u_31?.["full"]} style={{ "display": "flex", "alignItems": "center", "gap": "10px", "width": "100%", "textAlign": "left", "background": "transparent", "border": "none", "borderRadius": "8px", "padding": "7px 8px", "cursor": "pointer", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scps scpt">
                                      {" "}
                                      <span style={{ "width": "28px", "height": "28px", "flexShrink": "0", "borderRadius": "9999px", "background": "#f5f5f5", "border": "1px solid " + S(_u_31?.["ring"]), "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "11px", "fontWeight": "600", "color": "#171717" }}>
                                        {T(_u_31?.["ini"])}
                                      </span>
                                      {" "}
                                      <span style={{ "minWidth": "0", "flex": "1" }}>
                                        {" "}
                                        <span style={{ "display": "flex", "alignItems": "center", "gap": "6px", "minWidth": "0" }}>
                                          <span style={{ "fontSize": "14px", "fontWeight": S(_u_31?.["weight"]), "color": "#171717", "minWidth": "0", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                            {T(_u_31?.["nombre"])}
                                          </span>
                                          {_u_31?.["hasTag"] ? (<>
                                            <span style={{ "flexShrink": "0", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "10px", "letterSpacing": "0.04em", "color": "#171717", "background": S(_u_31?.["tagBg"]), "borderRadius": "9999px", "padding": "2px 7px" }}>
                                              {T(_u_31?.["tag"])}
                                            </span>
                                          </>) : null}
                                        </span>
                                        {" "}
                                        <span style={{ "display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "11px", "color": S(_u_31?.["loadInk"]), "marginTop": "1px" }}>
                                          {" "}
                                          {_u_31?.["hasLate"] ? (<>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#ea580c)" }}>
                                              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                              <path d="M12 9v4"></path>
                                              <path d="M12 17h.01"></path>
                                            </svg>
                                            {T(_u_31?.["lateLabel"])}
                                          </>) : null}
                                          {" "}
                                          {_u_31?.["hasLate"] ? (<>
                                            <span style={{ "color": "#d4d4d4" }}>
                                              {"·"}
                                            </span>
                                          </>) : null}
                                          {T(_u_31?.["load"])}{" "}
                                        </span>
                                        {" "}
                                      </span>
                                      {" "}
                                      {_u_31?.["on"] ? (<>
                                        {" "}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#171717)" }}>
                                          <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                        {" "}
                                      </>) : null}
                                      {" "}
                                    </button>
                                    {" "}
                                  </React.Fragment>
                                ))}
                                {" "}
                                {V["asigHasPerson"] && V["canUnassign"] ? (<>
                                  {" "}
                                  <button onClick={V["asigClear"]} style={{ "display": "flex", "alignItems": "center", "gap": "8px", "width": "100%", "textAlign": "left", "background": "transparent", "border": "none", "borderTop": "1px solid #e5e5e5", "borderRadius": "0 0 8px 8px", "marginTop": "6px", "padding": "10px 8px 6px", "fontSize": "14px", "color": "#525252", "cursor": "pointer", "transition": "color var(--duration-fast) var(--ease-standard)" }} className="scp1r scpt">
                                    {" "}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                      <path d="M18 6 6 18"></path>
                                      <path d="m6 6 12 12"></path>
                                    </svg>
                                    {"Quitar asignación "}
                                  </button>
                                  {" "}
                                </>) : null}
                                {" "}
                              </div>
                              {" "}
                            </>) : null}
                            {" "}
                          </div>
                          {" "}
                          <span style={{ "fontSize": "12px", "color": "#737373" }}>
                            {"Quien recibe el ticket también puede cerrarlo."}
                          </span>
                          {" "}
                        </div>
                        {" "}
                      </>) : null}
                      {" "}
                      <div style={{ "background": "#ebede7", "borderRadius": "16px", "padding": "16px" }}>
                        {" "}
                        <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em", "marginBottom": "12px" }}>
                          {"ADJUNTOS"}
                        </div>
                        {" "}
                        <div style={{ "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                          {" "}
                          {L(V["dFiles"]).map((_f_32, $index) => (
                            <React.Fragment key={$index}>
                              {" "}
                              <div onClick={_f_32?.["open"]} onKeyDown={_f_32?.["key"]} role="button" tabIndex="0" aria-label={"Ver " + S(_f_32?.["nombre"]) + " en grande"} title="Ver en grande" style={{ "cursor": "zoom-in", "borderRadius": "8px", "outline": "none", "transition": "transform var(--duration-fast) var(--ease-standard)" }} className="scp1s scph">
                                {" "}
                                {_f_32?.["noUrl"] ? (<>
                                  {" "}
                                  <div style={{ "height": "120px", "border": "1px solid #e5e5e5", "borderRadius": "8px", "backgroundImage": "repeating-linear-gradient(45deg,#f5f5f5 0 8px,#ffffff 8px 16px)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                                    {" "}
                                    <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "6px", "padding": "4px 8px" }}>
                                      {T(_f_32?.["tipo"])}
                                    </span>
                                    {" "}
                                  </div>
                                  {" "}
                                </>) : null}
                                {" "}
                                {_f_32?.["hasUrl"] ? (<>
                                  {" "}
                                  <div title={_f_32?.["nombre"]} style={{ "height": "120px", "border": "1px solid #e5e5e5", "borderRadius": "8px", "backgroundColor": "#f5f5f5", "backgroundImage": "url(" + S(_f_32?.["url"]) + ")", "backgroundSize": "cover", "backgroundPosition": "center" }}></div>
                                  {" "}
                                </>) : null}
                                {" "}
                                <div style={{ "display": "flex", "justifyContent": "space-between", "gap": "8px", "marginTop": "8px" }}>
                                  {" "}
                                  <span style={{ "fontSize": "12px", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                    {T(_f_32?.["nombre"])}
                                  </span>
                                  {" "}
                                  <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "flexShrink": "0" }}>
                                    {T(_f_32?.["peso"])}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </React.Fragment>
                          ))}
                          {" "}
                          {V["canUpload"] ? (<>
                            {" "}
                            <button onClick={V["onUpload"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp1t scp4">
                              {" "}
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": S(V["tapUpload"]), "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,translateY(0) scale(1)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                <path d="M16 5h6"></path>
                                <path d="M19 2v6"></path>
                                <path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"></path>
                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                              </svg>
                              {"Subir imagen "}
                            </button>
                            {" "}
                            <input id="tic-file" type="file" accept="image/jpeg,image/png,image/webp" multiple="true" onChange={V["onFileChange"]} style={{ "display": "none" }} />
                            {" "}
                            <span style={{ "fontSize": "12px", "color": "#525252", "textAlign": "center" }}>
                              {T(V["uploadRule"])}
                            </span>
                            {" "}
                            {V["hasStaged"] ? (<>
                              {" "}
                              <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "12px", "display": "flex", "flexDirection": "column", "gap": "10px", "animation": "dropIn var(--duration-base) var(--ease-standard) both" }}>
                                {" "}
                                <div style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
                                  {" "}
                                  <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
                                    {"SIN ENVIAR · "}{T(V["stagedCount"])}
                                  </span>
                                  {" "}
                                  <span style={{ "marginLeft": "auto", "fontSize": "12px", "color": "#737373" }}>
                                    {"Tocá una para verla grande"}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div style={{ "display": "grid", "gridTemplateColumns": "repeat(2,minmax(0,1fr))", "gap": "8px" }}>
                                  {" "}
                                  {L(V["staged"]).map((_sg_33, $index) => (
                                    <React.Fragment key={$index}>
                                      {" "}
                                      <div style={{ "position": "relative", "animation": "badgePop 320ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
                                        {" "}
                                        <div onClick={_sg_33?.["open"]} role="button" tabIndex="0" aria-label={"Ver " + S(_sg_33?.["nombre"]) + " en grande"} title={_sg_33?.["nombre"]} style={{ "aspectRatio": "4/3", "border": "1px solid #e5e5e5", "borderRadius": "8px", "backgroundColor": "#f5f5f5", "backgroundImage": "url(" + S(_sg_33?.["url"]) + ")", "backgroundSize": "cover", "backgroundPosition": "center", "cursor": "zoom-in", "transition": "transform var(--duration-fast) var(--ease-standard)" }} className="scp1s scp1u"></div>
                                        {" "}
                                        <button onClick={_sg_33?.["remove"]} aria-label={"Quitar " + S(_sg_33?.["nombre"])} title="Quitar" style={{ "position": "absolute", "top": "6px", "right": "6px", "width": "26px", "height": "26px", "borderRadius": "9999px", "background": "#ffffff", "border": "1px solid #e5e5e5", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1v scp1w">
                                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                          </svg>
                                        </button>
                                        {" "}
                                        <div style={{ "display": "flex", "justifyContent": "space-between", "gap": "6px", "marginTop": "4px" }}>
                                          {" "}
                                          <span style={{ "fontSize": "11px", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis", "minWidth": "0" }}>
                                            {T(_sg_33?.["nombre"])}
                                          </span>
                                          {" "}
                                          <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "flexShrink": "0" }}>
                                            {T(_sg_33?.["peso"])}
                                          </span>
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
                                <div style={{ "display": "flex", "gap": "8px" }}>
                                  {" "}
                                  <button onClick={V["onSendStaged"]} style={{ "flex": "1", "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "9px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1x scp2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": S(V["tapStage"]), "transform": "var(--im,translateY(0)) scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                                      <path d="m17 8-5-5-5 5"></path>
                                      <path d="M12 3v12"></path>
                                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    </svg>
                                    {T(V["stagedLabel"])}
                                  </button>
                                  {" "}
                                  <button onClick={V["onDropStaged"]} aria-label="Quitar todas" title="Quitar todas" style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "0 10px", "cursor": "pointer", "display": "flex", "alignItems": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1y scp1z">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                      <path d="M3 6h18"></path>
                                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    </svg>
                                  </button>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </>) : null}
                            {" "}
                            {V["hasUploads"] ? (<>
                              {" "}
                              <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                                {" "}
                                {L(V["uploads"]).map((_u_34, $index) => (
                                  <React.Fragment key={$index}>
                                    {" "}
                                    <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "10px", "animation": "dropIn var(--duration-base) var(--ease-standard) both" }}>
                                      {" "}
                                      <div style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
                                        {" "}
                                        {_u_34?.["failed"] ? (<>
                                          {" "}
                                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                            <path d="M12 9v4"></path>
                                            <path d="M12 17h.01"></path>
                                          </svg>
                                          {" "}
                                        </>) : null}
                                        {" "}
                                        <span style={{ "fontSize": "12px", "color": "#171717", "minWidth": "0", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                          {T(_u_34?.["nombre"])}
                                        </span>
                                        {" "}
                                        {_u_34?.["ok"] ? (<>
                                          {" "}
                                          <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "flexShrink": "0" }}>
                                            {T(_u_34?.["pctLabel"])}
                                          </span>
                                          {" "}
                                        </>) : null}
                                        {" "}
                                        {_u_34?.["failed"] ? (<>
                                          {" "}
                                          <button onClick={_u_34?.["dismiss"]} aria-label="Descartar archivo" title="Descartar archivo" style={{ "marginLeft": "auto", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "6px", "padding": "3px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scpu scp20">
                                            <svg style={{ "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                              <path d="M18 6 6 18"></path>
                                              <path d="m6 6 12 12"></path>
                                            </svg>
                                          </button>
                                          {" "}
                                        </>) : null}
                                        {" "}
                                      </div>
                                      {" "}
                                      {_u_34?.["ok"] ? (<>
                                        {" "}
                                        <div style={{ "marginTop": "8px", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "10px", "height": "40px", "background": "#0a0a0a", "borderRadius": "8px" }}>
                                          <span aria-hidden="true" style={{ "position": "relative", "display": "inline-block", "height": "12px", "flexShrink": "0" }}>
                                            <img src="/marca/legumex-isotipo.png" alt="" style={{ "height": "12px", "width": "auto", "display": "block", "opacity": "0.28", "filter": "brightness(0) invert(1)" }} />
                                            <img src="/marca/legumex-isotipo.png" alt="" style={{ "position": "absolute", "left": "0", "top": "0", "height": "12px", "width": "auto", "display": "block", "clipPath": "inset(0 " + S(_u_34?.["rest"]) + " 0 0)", "transition": "clip-path 240ms linear", "filter": "brightness(0) invert(1)" }} />
                                          </span>
                                          <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#ffffff", "letterSpacing": "0.04em" }}>
                                            {"SUBIENDO · "}{T(_u_34?.["pctLabel"])}
                                          </span>
                                        </div>
                                        {" "}
                                      </>) : null}
                                      {" "}
                                      {_u_34?.["failed"] ? (<>
                                        {" "}
                                        <div style={{ "fontSize": "12px", "lineHeight": "1.43", "color": "#262626", "marginTop": "4px" }}>
                                          {T(_u_34?.["msg"])}
                                        </div>
                                        {" "}
                                        <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "marginTop": "2px", "letterSpacing": "0.02em" }}>
                                          {"NO SE ENVIÓ · HTTP 400 EVITADO"}
                                        </div>
                                        {" "}
                                      </>) : null}
                                      {" "}
                                    </div>
                                    {" "}
                                  </React.Fragment>
                                ))}
                                {" "}
                              </div>
                              {" "}
                            </>) : null}
                            {" "}
                          </>) : null}
                          {" "}
                          {V["dNoFiles"] ? (<>
                            {" "}
                            <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "16px", "textAlign": "center" }}>
                              {" "}
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "margin": "0 auto 8px", "display": "block" }}>
                                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                <circle cx="9" cy="9" r="2"></circle>
                                <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"></path>
                              </svg>
                              <div style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717" }}>
                                {"Sin adjuntos"}
                              </div>
                              {" "}
                              <div style={{ "fontSize": "12px", "color": "#737373", "marginTop": "2px" }}>
                                {"Una captura del error acelera el diagnóstico."}
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
                    </div>
                    {" "}
                  </div>
                  {" "}
                </>) : null}
                {" "}
              </div>
              {" "}
            </>) : null}
            {" "}
            {V["showPulso"] ? (<>
              {" "}
              <div>
                {" "}
                <div style={{ "display": "flex", "marginBottom": "16px" }}>
                  <button onClick={V["onHeaderBack"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "flexShrink": "0", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpm scp4">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    {"Volver al listado"}
                  </button>
                </div>
                {" "}
                {V["vistaAdmin"] ? (<>
                  {" "}
                  <div style={{ "position": "relative", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(170px,1fr))", "columnGap": "0", "rowGap": "28px", "margin": "8px 0 20px", "padding": "24px 20px 20px", "background": "rgba(244,245,241,0.9)", "backdropFilter": "blur(12px)", "WebkitBackdropFilter": "blur(12px)", "borderRadius": "12px", "borderRadius": "16px" }}>
                    {" "}
                    <div style={{ "position": "relative", "padding": "22px 24px 0 0", "borderTop": "1px solid #d4d6cf", "minWidth": "0", "animation": "dropIn var(--duration-page) var(--ease-standard) 0ms both" }}>
                      {" "}
                      <span aria-hidden="true" style={{ "position": "absolute", "top": "-4px", "left": "0", "width": "9px", "height": "9px", "borderRadius": "9999px", "background": "#ea580c", "boxShadow": "0 0 0 4px #f4f5f1" }}></span>
                      {" "}
                      <div style={{ "fontSize": "40px", "lineHeight": "1", "fontWeight": "700", "letterSpacing": "-0.035em", "color": "#171717" }}>
                        {T(V["pLate"])}
                      </div>
                      {" "}
                      <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "#525252", "marginTop": "10px" }}>
                        {"SIN MOVER"}
                      </div>
                      {" "}
                      <div style={{ "fontSize": "13px", "lineHeight": "1.45", "color": "#525252", "marginTop": "6px", "textWrap": "pretty" }}>
                        {"Pasaron su margen y nadie los tocó"}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ "position": "relative", "padding": "22px 24px 0 0", "borderTop": "1px solid #d4d6cf", "minWidth": "0", "animation": "dropIn var(--duration-page) var(--ease-standard) 60ms both" }}>
                      {" "}
                      <span aria-hidden="true" style={{ "position": "absolute", "top": "-4px", "left": "0", "width": "9px", "height": "9px", "borderRadius": "9999px", "background": "#ea580c", "boxShadow": "0 0 0 4px #f4f5f1" }}></span>
                      {" "}
                      <div style={{ "fontSize": "40px", "lineHeight": "1", "fontWeight": "700", "letterSpacing": "-0.035em", "color": "#171717" }}>
                        {T(V["pUnassigned"])}
                      </div>
                      {" "}
                      <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "#525252", "marginTop": "10px" }}>
                        {"SIN DUEÑO"}
                      </div>
                      {" "}
                      <div style={{ "fontSize": "13px", "lineHeight": "1.45", "color": "#525252", "marginTop": "6px", "textWrap": "pretty" }}>
                        {"Activos que todavía no tienen técnico"}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ "position": "relative", "padding": "22px 24px 0 0", "borderTop": "1px solid #d4d6cf", "minWidth": "0", "animation": "dropIn var(--duration-page) var(--ease-standard) 120ms both" }}>
                      {" "}
                      <span aria-hidden="true" style={{ "position": "absolute", "top": "-4px", "left": "0", "width": "9px", "height": "9px", "borderRadius": "9999px", "background": "#2563eb", "boxShadow": "0 0 0 4px #f4f5f1" }}></span>
                      {" "}
                      <div style={{ "fontSize": "40px", "lineHeight": "1", "fontWeight": "700", "letterSpacing": "-0.035em", "color": "#171717" }}>
                        {T(V["pFirstResp"])}
                      </div>
                      {" "}
                      <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "#525252", "marginTop": "10px" }}>
                        {"PRIMERA RESPUESTA"}
                      </div>
                      {" "}
                      <div style={{ "fontSize": "13px", "lineHeight": "1.45", "color": "#525252", "marginTop": "6px", "textWrap": "pretty" }}>
                        {"Promedio hasta que alguien contesta"}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ "position": "relative", "padding": "22px 24px 0 0", "borderTop": "1px solid #d4d6cf", "minWidth": "0", "animation": "dropIn var(--duration-page) var(--ease-standard) 180ms both" }}>
                      {" "}
                      <span aria-hidden="true" style={{ "position": "absolute", "top": "-4px", "left": "0", "width": "9px", "height": "9px", "borderRadius": "9999px", "background": "#16a34a", "boxShadow": "0 0 0 4px #f4f5f1" }}></span>
                      {" "}
                      <div style={{ "fontSize": "40px", "lineHeight": "1", "fontWeight": "700", "letterSpacing": "-0.035em", "color": "#171717" }}>
                        {T(V["pResolution"])}
                      </div>
                      {" "}
                      <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "#525252", "marginTop": "10px" }}>
                        {"HASTA EL CIERRE"}
                      </div>
                      {" "}
                      <div style={{ "fontSize": "13px", "lineHeight": "1.45", "color": "#525252", "marginTop": "6px", "textWrap": "pretty" }}>
                        {"Promedio de principio a fin"}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(260px,1fr))", "gap": "12px", "marginBottom": "16px" }}>
                    {" "}
                    <div style={{ "background": S(V["pLateBg"]), "border": S(V["pLateBorder"]), "borderRadius": "12px", "padding": "16px" }}>
                      {" "}
                      <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.12em", "display": "flex", "alignItems": "center", "gap": "12px" }}>
                        <span aria-hidden="true" style={{ "width": "28px", "height": "1px", "background": "#a3a3a3", "flexShrink": "0" }}></span>
                        {"PASARON SU MARGEN"}
                      </div>
                      {" "}
                      <div style={{ "display": "flex", "alignItems": "baseline", "gap": "8px", "marginTop": "8px" }}>
                        {" "}
                        <span style={{ "fontSize": "24px", "lineHeight": "1.33", "fontWeight": "600", "color": "#171717" }}>
                          {T(V["pLate"])}
                        </span>
                        {" "}
                        <span style={{ "fontSize": "12px", "color": "#525252" }}>
                          {T(V["pLateNote"])}
                        </span>
                        {" "}
                      </div>
                      {" "}
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "2px", "marginTop": "10px", "borderTop": "1px solid #e5e5e5", "paddingTop": "10px" }}>
                        {" "}
                        <span style={{ "fontSize": "12px", "color": "#525252", "textWrap": "pretty" }}>
                          {T(V["pWaitNote"])}
                        </span>
                        {" "}
                        {V["pWaitWeek"] ? (<>
                          {" "}
                          <span style={{ "fontSize": "12px", "color": "#525252", "textWrap": "pretty" }}>
                            {T(V["pWaitWeekNote"])}
                          </span>
                          {" "}
                        </>) : null}
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "16px" }}>
                      {" "}
                      <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.12em", "display": "flex", "alignItems": "center", "gap": "12px" }}>
                        <span aria-hidden="true" style={{ "width": "28px", "height": "1px", "background": "#a3a3a3", "flexShrink": "0" }}></span>
                        {"SIN ASIGNAR"}
                      </div>
                      {" "}
                      <div style={{ "display": "flex", "alignItems": "baseline", "gap": "8px", "marginTop": "8px" }}>
                        {" "}
                        <span style={{ "fontSize": "24px", "lineHeight": "1.33", "fontWeight": "600", "color": "#171717" }}>
                          {T(V["pUnassigned"])}
                        </span>
                        {" "}
                        <span style={{ "fontSize": "12px", "color": "#737373" }}>
                          {T(V["pUnassignedNote"])}
                        </span>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "16px" }}>
                      {" "}
                      <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.12em", "display": "flex", "alignItems": "center", "gap": "12px" }}>
                        <span aria-hidden="true" style={{ "width": "28px", "height": "1px", "background": "#a3a3a3", "flexShrink": "0" }}></span>
                        {"PRIMERA RESPUESTA"}
                      </div>
                      {" "}
                      <div style={{ "display": "flex", "alignItems": "baseline", "gap": "8px", "marginTop": "8px" }}>
                        {" "}
                        <span style={{ "fontSize": "24px", "lineHeight": "1.33", "fontWeight": "600", "color": "#171717" }}>
                          {T(V["pFirstResp"])}
                        </span>
                        {" "}
                        <span style={{ "fontSize": "12px", "color": "#737373" }}>
                          {T(V["pFirstRespNote"])}
                        </span>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "16px" }}>
                      {" "}
                      <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.12em", "display": "flex", "alignItems": "center", "gap": "12px" }}>
                        <span aria-hidden="true" style={{ "width": "28px", "height": "1px", "background": "#a3a3a3", "flexShrink": "0" }}></span>
                        {"TIEMPO HASTA EL CIERRE"}
                      </div>
                      {" "}
                      <div style={{ "display": "flex", "alignItems": "baseline", "gap": "8px", "marginTop": "8px" }}>
                        {" "}
                        <span style={{ "fontSize": "24px", "lineHeight": "1.33", "fontWeight": "600", "color": "#171717" }}>
                          {T(V["pResolution"])}
                        </span>
                        {" "}
                        <span style={{ "fontSize": "12px", "color": "#737373" }}>
                          {T(V["pResolutionNote"])}
                        </span>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "16px", "marginBottom": "16px", "alignItems": "stretch" }}>
                    {" "}
                    <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "24px", "flex": "2 1 460px", "minWidth": "0" }}>
                      {" "}
                      <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "16px", "flexWrap": "wrap" }}>
                        {" "}
                        <div style={{ "minWidth": "0" }}>
                          {" "}
                          <h3 style={{ "fontSize": "16px", "fontWeight": "600", "margin": "0", "color": "#171717" }}>
                            {"Entradas y cierres"}
                          </h3>
                          {" "}
                          <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "marginTop": "2px" }}>
                            {"Últimos 14 días · si la línea verde va por arriba, la cola baja"}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div style={{ "marginLeft": "auto", "display": "flex", "gap": "20px", "flexWrap": "wrap" }}>
                          {" "}
                          <div>
                            <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.12em", "display": "flex", "alignItems": "center", "gap": "12px" }}>
                              <span aria-hidden="true" style={{ "width": "28px", "height": "1px", "background": "#a3a3a3", "flexShrink": "0" }}></span>
                              {"ENTRARON"}
                            </div>
                            <div style={{ "display": "flex", "alignItems": "center", "gap": "6px", "marginTop": "4px" }}>
                              <span style={{ "width": "10px", "height": "2px", "background": "#171717", "borderRadius": "2px" }}></span>
                              <span style={{ "fontSize": "20px", "fontWeight": "600", "color": "#171717" }}>
                                {T(V["pInTotal"])}
                              </span>
                            </div>
                          </div>
                          {" "}
                          <div>
                            <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.12em", "display": "flex", "alignItems": "center", "gap": "12px" }}>
                              <span aria-hidden="true" style={{ "width": "28px", "height": "1px", "background": "#a3a3a3", "flexShrink": "0" }}></span>
                              {"CERRARON"}
                            </div>
                            <div style={{ "display": "flex", "alignItems": "center", "gap": "6px", "marginTop": "4px" }}>
                              <span style={{ "width": "10px", "height": "2px", "background": "#16a34a", "borderRadius": "2px" }}></span>
                              <span style={{ "fontSize": "20px", "fontWeight": "600", "color": "#171717" }}>
                                {T(V["pOutTotal"])}
                              </span>
                            </div>
                          </div>
                          {" "}
                          <div>
                            <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.12em", "display": "flex", "alignItems": "center", "gap": "12px" }}>
                              <span aria-hidden="true" style={{ "width": "28px", "height": "1px", "background": "#a3a3a3", "flexShrink": "0" }}></span>
                              {"BALANCE"}
                            </div>
                            <div style={{ "fontSize": "20px", "fontWeight": "600", "color": S(V["pNetInk"]), "marginTop": "4px" }}>
                              {T(V["pNet"])}
                            </div>
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <div style={{ "position": "relative", "height": "200px", "marginTop": "20px" }}>
                        {" "}
                        <svg viewBox="0 0 640 200" preserveAspectRatio="none" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "overflow": "visible" }}>
                          {" "}
                          {L(V["pGrid"]).map((_gl_35, $index) => (
                            <React.Fragment key={$index}>
                              {" "}
                              <line x1="0" x2="640" y1={_gl_35?.["y"]} y2={_gl_35?.["y"]} stroke="#f0f0f0" strokeWidth="1" vectorEffect="non-scaling-stroke"></line>
                              {" "}
                            </React.Fragment>
                          ))}
                          {" "}
                          <defs>
                            <linearGradient id="pvArea" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0" stopColor="#16a34a" stopOpacity="0.22"></stop>
                              <stop offset="1" stopColor="#16a34a" stopOpacity="0"></stop>
                            </linearGradient>
                          </defs>
                          {" "}
                          <path d={V["pOutArea"]} fill="url(#pvArea)" style={{ "animation": "chartFade 900ms var(--ease-standard) 400ms both" }}></path>
                          {" "}
                          <path d={V["pInPath"]} fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" pathLength="1" strokeDasharray="1" style={{ "animation": "chartDraw 1100ms var(--ease-standard) both" }}></path>
                          {" "}
                          <path d={V["pOutPath"]} fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" pathLength="1" strokeDasharray="1" style={{ "animation": "chartDraw 1100ms var(--ease-standard) 180ms both" }}></path>
                          {" "}
                        </svg>
                        {" "}
                        <div style={{ "position": "absolute", "inset": "0", "display": "grid", "gridTemplateColumns": "repeat(14,minmax(0,1fr))" }}>
                          {" "}
                          {L(V["pDays"]).map((_d_36, $index) => (
                            <React.Fragment key={$index}>
                              {" "}
                              <div style={{ "position": "relative", "cursor": "default" }} className="scp21">
                                {" "}
                                <span style={{ "position": "absolute", "left": "50%", "top": "0", "bottom": "0", "width": "1px", "background": "var(--tl,transparent)" }}></span>
                                {" "}
                                <span style={{ "position": "absolute", "left": "50%", "top": S(_d_36?.["yIn"]), "width": "8px", "height": "8px", "margin": "-4px 0 0 -4px", "borderRadius": "9999px", "background": "#ffffff", "border": "2px solid #171717", "opacity": "var(--tp,0)", "transition": "opacity var(--duration-fast) var(--ease-standard)" }}></span>
                                {" "}
                                <span style={{ "position": "absolute", "left": "50%", "top": S(_d_36?.["yOut"]), "width": "8px", "height": "8px", "margin": "-4px 0 0 -4px", "borderRadius": "9999px", "background": "#ffffff", "border": "2px solid #16a34a", "opacity": "var(--tp,0)", "transition": "opacity var(--duration-fast) var(--ease-standard)" }}></span>
                                {" "}
                                <span style={{ "position": "absolute", "bottom": "calc(100% + 6px)", "left": "50%", "transform": "translateX(-50%)", "background": "#0a0a0a", "color": "#ffffff", "borderRadius": "8px", "padding": "6px 10px", "fontSize": "12px", "whiteSpace": "nowrap", "pointerEvents": "none", "opacity": "var(--tp,0)", "transition": "opacity var(--duration-fast) var(--ease-standard)", "zIndex": "2" }}>
                                  {T(_d_36?.["tip"])}
                                </span>
                                {" "}
                              </div>
                              {" "}
                            </React.Fragment>
                          ))}
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <div style={{ "display": "flex", "justifyContent": "space-between", "marginTop": "8px", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373" }}>
                        <span>
                          {"HACE 13 D"}
                        </span>
                        <span>
                          {"HACE 7 D"}
                        </span>
                        <span>
                          {"HOY"}
                        </span>
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "24px", "flex": "1 1 300px", "minWidth": "0" }}>
                      {" "}
                      <h3 style={{ "fontSize": "16px", "fontWeight": "600", "margin": "0", "color": "#171717" }}>
                        {"Estado de lo activo"}
                      </h3>
                      {" "}
                      <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "marginTop": "2px" }}>
                        {"Contra el margen de atención de cada prioridad"}
                      </div>
                      {" "}
                      <div style={{ "display": "flex", "alignItems": "center", "gap": "20px", "flexWrap": "wrap", "marginTop": "20px" }}>
                        {" "}
                        <div style={{ "position": "relative", "width": "148px", "height": "148px", "flexShrink": "0" }}>
                          {" "}
                          <svg viewBox="0 0 42 42" style={{ "width": "100%", "height": "100%", "animation": "donutIn 900ms cubic-bezier(0.34,1.4,0.64,1) both" }}>
                            {" "}
                            <circle cx="21" cy="21" r="15.915" fill="none" stroke="#f5f5f5" strokeWidth="5"></circle>
                            {" "}
                            {L(V["pDonut"]).map((_sg_37, $index) => (
                              <React.Fragment key={$index}>
                                {" "}
                                <circle cx="21" cy="21" r="15.915" fill="none" stroke={_sg_37?.["color"]} strokeWidth="5" strokeDasharray={_sg_37?.["dash"]} strokeDashoffset={_sg_37?.["off"]} style={{ "transition": "stroke-width var(--duration-fast) var(--ease-standard)" }} className="scp22">
                                  <title>
                                    {T(_sg_37?.["title"])}
                                  </title>
                                </circle>
                                {" "}
                              </React.Fragment>
                            ))}
                            {" "}
                          </svg>
                          {" "}
                          <div style={{ "position": "absolute", "inset": "0", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }}>
                            {" "}
                            <span style={{ "fontSize": "30px", "lineHeight": "1", "fontWeight": "600", "color": "#171717" }}>
                              {T(V["pActTotal"])}
                            </span>
                            {" "}
                            <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em", "marginTop": "4px" }}>
                              {"ACTIVOS"}
                            </span>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div style={{ "display": "flex", "flexDirection": "column", "gap": "10px", "minWidth": "0", "flex": "1" }}>
                          {" "}
                          {L(V["pDonut"]).map((_sg_38, $index) => (
                            <React.Fragment key={$index}>
                              {" "}
                              <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "minWidth": "0" }}>
                                {" "}
                                <span style={{ "width": "10px", "height": "10px", "borderRadius": "3px", "background": S(_sg_38?.["color"]), "flexShrink": "0" }}></span>
                                {" "}
                                <span style={{ "fontSize": "14px", "color": "#171717", "minWidth": "0", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                  {T(_sg_38?.["label"])}
                                </span>
                                {" "}
                                <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "12px", "color": "#171717", "flexShrink": "0" }}>
                                  {T(_sg_38?.["n"])}
                                </span>
                                {" "}
                                <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "width": "36px", "textAlign": "right", "flexShrink": "0" }}>
                                  {T(_sg_38?.["pct"])}
                                </span>
                                {" "}
                              </div>
                              {" "}
                            </React.Fragment>
                          ))}
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(320px,1fr))", "gap": "16px", "alignItems": "start" }}>
                    {" "}
                    <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "24px" }}>
                      {" "}
                      <h3 style={{ "fontSize": "16px", "fontWeight": "600", "margin": "0", "color": "#171717" }}>
                        {"Carga por persona"}
                      </h3>
                      {" "}
                      <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "marginTop": "2px", "marginBottom": "16px" }}>
                        {"Tickets activos asignados a cada uno, antes de repartir más"}
                      </div>
                      {" "}
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                        {" "}
                        {L(V["pLoad"]).map((_p_39, $index) => (
                          <React.Fragment key={$index}>
                            {" "}
                            <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                              {" "}
                              <div style={{ "width": "32px", "height": "32px", "flexShrink": "0", "borderRadius": "9999px", "background": "#f5f5f5", "border": "1px solid " + S(_p_39?.["ring"]), "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                                {T(_p_39?.["ini"])}
                              </div>
                              {" "}
                              <div style={{ "minWidth": "0", "flex": "1" }}>
                                {" "}
                                <div style={{ "display": "flex", "alignItems": "baseline", "gap": "8px" }}>
                                  {" "}
                                  <span style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717", "minWidth": "0", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                    {T(_p_39?.["nombre"])}
                                  </span>
                                  {" "}
                                  <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "12px", "color": "#171717", "flexShrink": "0" }}>
                                    {T(_p_39?.["count"])}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div style={{ "height": "6px", "borderRadius": "9999px", "background": "#f5f5f5", "marginTop": "6px", "overflow": "hidden" }}>
                                  {" "}
                                  <div style={{ "height": "6px", "borderRadius": "9999px", "background": S(_p_39?.["bar"]), "width": S(_p_39?.["width"]), "transition": "width var(--duration-base) var(--ease-standard)" }}></div>
                                  {" "}
                                </div>
                                {" "}
                                <div style={{ "fontSize": "11px", "color": S(_p_39?.["noteInk"]), "marginTop": "4px" }}>
                                  {T(_p_39?.["note"])}
                                </div>
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
                    </div>
                    {" "}
                    <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "24px" }}>
                      {" "}
                      <h3 style={{ "fontSize": "16px", "fontWeight": "600", "margin": "0", "color": "#171717" }}>
                        {"De dónde vienen"}
                      </h3>
                      {" "}
                      <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "marginTop": "2px", "marginBottom": "16px" }}>
                        {"Tickets por categoría — dice dónde conviene atacar la causa"}
                      </div>
                      {" "}
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                        {" "}
                        {L(V["pCats"]).map((_c_40, $index) => (
                          <React.Fragment key={$index}>
                            {" "}
                            <div>
                              {" "}
                              <div style={{ "display": "flex", "alignItems": "baseline", "gap": "8px" }}>
                                {" "}
                                <span style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717", "minWidth": "0", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                  {T(_c_40?.["nombre"])}
                                </span>
                                {" "}
                                <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "12px", "color": "#171717", "flexShrink": "0" }}>
                                  {T(_c_40?.["count"])}
                                </span>
                                {" "}
                              </div>
                              {" "}
                              <div style={{ "height": "6px", "borderRadius": "9999px", "background": "#f5f5f5", "marginTop": "6px", "overflow": "hidden" }}>
                                {" "}
                                <div style={{ "height": "6px", "borderRadius": "9999px", "background": S(_c_40?.["bar"]), "width": S(_c_40?.["width"]), "transition": "width var(--duration-base) var(--ease-standard)" }}></div>
                                {" "}
                              </div>
                              {" "}
                              <div style={{ "fontSize": "11px", "color": "#737373", "marginTop": "4px" }}>
                                {T(_c_40?.["note"])}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </React.Fragment>
                        ))}
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  {V["pHasLate"] ? (<>
                    {" "}
                    <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "24px", "marginTop": "16px" }}>
                      {" "}
                      <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "4px" }}>
                        {" "}
                        <h3 style={{ "fontSize": "16px", "fontWeight": "600", "margin": "0", "color": "#171717" }}>
                          {"Lo que hay que mover hoy"}
                        </h3>
                        {" "}
                        <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373" }}>
                          {T(V["pLate"])}
                        </span>
                        {" "}
                      </div>
                      {" "}
                      <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "marginBottom": "16px" }}>
                        {"Ordenados por tiempo sin actividad"}
                      </div>
                      {" "}
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                        {" "}
                        {L(V["pLateRows"]).map((_t_41, $index) => (
                          <React.Fragment key={$index}>
                            {" "}
                            <div onClick={_t_41?.["open"]} onKeyDown={_t_41?.["key"]} tabIndex="0" role="button" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "12px", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)" }} className="scp14 scp1g">
                              {" "}
                              <div style={{ "minWidth": "0", "flex": "1" }}>
                                {" "}
                                <div style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                  {T(_t_41?.["titulo"])}
                                </div>
                                {" "}
                                <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "marginTop": "2px" }}>
                                  {T(_t_41?.["code"])}{" · "}{T(_t_41?.["asig"])}
                                </div>
                                {" "}
                              </div>
                              {" "}
                              <span title={_t_41?.["slaTitle"]} style={{ "flexShrink": "0", "display": "inline-flex", "alignItems": "center", "gap": "6px", "background": "#ffffff", "border": "1px solid #ea580c", "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "11px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap" }}>
                                {" "}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                {T(_t_41?.["slaLabel"])}{" "}
                              </span>
                              {" "}
                              {_t_41?.["canTake"] ? (<>
                                {" "}
                                <button onClick={_t_41?.["take"]} aria-label={_t_41?.["takeLabel"]} title={_t_41?.["takeLabel"]} style={{ "flexShrink": "0", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "5px 10px", "fontSize": "12px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "6px", "whiteSpace": "nowrap", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp12 scp4">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": S(_t_41?.["tapTake"]), "transform": "var(--im,translateY(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M19 8v6"></path>
                                    <path d="M22 11h-6"></path>
                                  </svg>
                                  {"Tomar"}
                                </button>
                                {" "}
                              </>) : null}
                              {" "}
                            </div>
                            {" "}
                          </React.Fragment>
                        ))}
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </>) : null}
                  {" "}
                  <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start", "background": "#ebede7", "borderRadius": "16px", "padding": "16px", "marginTop": "16px" }}>
                    {" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "marginTop": "2px" }}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                    {" "}
                    <span style={{ "fontSize": "12px", "lineHeight": "1.5", "color": "#525252", "textWrap": "pretty" }}>
                      {T(V["pNote"])}
                    </span>
                    {" "}
                  </div>
                  {" "}
                </>) : null}
              </div>
              {" "}
            </>) : null}
            {" "}
            {V["showChatPage"] ? (<>
              {" "}
              <div ref={V["chatPageRef"]} style={{ "display": "grid", "gridTemplateColumns": S(V["chatCols"]), "height": "calc(100vh - 232px)", "minHeight": "420px", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "16px", "overflow": "hidden" }}>
                {" "}
                {V["chatShowList"] ? (<>
                  {" "}
                  <div style={{ "display": "flex", "flexDirection": "column", "minHeight": "0", "minWidth": "0", "borderRight": S(V["chatListBorder"]) }}>
                    {" "}
                    <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "padding": "14px 14px 4px" }}>
                      {" "}
                      <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
                        {"CONVERSACIONES"}
                      </span>
                      {" "}
                      <span style={{ "marginLeft": "auto", "fontSize": "12px", "color": "#737373" }}>
                        {T(V["chatSub"])}
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ "padding": "10px 14px", "borderBottom": "1px solid #e5e5e5", "display": "flex", "flexDirection": "column", "gap": "8px", "flexShrink": "0" }}>
                      {" "}
                      <div style={{ "position": "relative" }}>
                        {" "}
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "position": "absolute", "left": "10px", "top": "50%", "transform": "translateY(-50%)", "pointerEvents": "none" }}>
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        {" "}
                        <input value={(V["chatQ"] ?? "")} onChange={V["onChatQ"]} placeholder="Buscar por título o código" style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "7px 10px 7px 32px", "fontSize": "13px", "outline": "none" }} />
                        {" "}
                      </div>
                      {" "}
                      {V["vistaAdmin"] ? (<>
                        {" "}
                        <div role="group" aria-label="Qué tickets contar" style={{ "display": "flex", "gap": "2px", "padding": "3px", "background": "rgba(10,10,10,0.05)", "borderRadius": "8px" }}>
                          {" "}
                          {L(V["chatScopeOpts"]).map((_o_42, $index) => (
                            <React.Fragment key={$index}>
                              {" "}
                              <button onClick={_o_42?.["go"]} aria-pressed={_o_42?.["pressed"]} style={{ "flex": "1", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "gap": "6px", "height": "30px", "padding": "0 8px", "border": "none", "borderRadius": "6px", "background": S(_o_42?.["bg"]), "boxShadow": S(_o_42?.["shadow"]), "fontSize": "12px", "fontWeight": S(_o_42?.["weight"]), "color": "#171717", "cursor": "pointer", "whiteSpace": "nowrap", "transition": "background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)" }} className="scpb">
                                {T(_o_42?.["label"])}
                                <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252" }}>
                                  {T(_o_42?.["count"])}
                                </span>
                              </button>
                              {" "}
                            </React.Fragment>
                          ))}
                          {" "}
                        </div>
                        {" "}
                      </>) : null}
                      {" "}
                      <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "4px", "background": "#f5f5f5", "borderRadius": "8px", "padding": "3px" }}>
                        {" "}
                        {L(V["chatFilters"]).map((_f_43, $index) => (
                          <React.Fragment key={$index}>
                            {" "}
                            <button onClick={_f_43?.["go"]} style={{ "flex": "1 1 auto", "border": "none", "background": S(_f_43?.["bg"]), "color": "#171717", "fontSize": "12px", "fontWeight": "500", "padding": "5px 6px", "borderRadius": "6px", "cursor": "pointer", "whiteSpace": "nowrap", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scp23">
                              {T(_f_43?.["label"])}
                            </button>
                            {" "}
                          </React.Fragment>
                        ))}
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ "flex": "1", "minHeight": "0", "overflowY": "auto", "padding": "6px" }}>
                      {" "}
                      {L(V["chatList"]).map((_c_44, $index) => (
                        <React.Fragment key={$index}>
                          {" "}
                          <button onClick={_c_44?.["go"]} style={{ "display": "flex", "gap": "10px", "width": "100%", "textAlign": "left", "background": S(_c_44?.["bg"]), "border": "none", "borderRadius": "10px", "padding": "10px", "cursor": "pointer", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scpg scpt">
                            {" "}
                            {_c_44?.["hasBlob"] ? (<>
                              {" "}
                              <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" ref={_c_44?.["blobRef"]} alt="" style={{ "width": "30px", "height": "30px", "borderRadius": "9999px", "background": "#f5f5f5", "border": "1px solid " + S(_c_44?.["ring"]), "flexShrink": "0", "display": "block" }} />
                              {" "}
                            </>) : null}
                            {" "}
                            {_c_44?.["noBlob"] ? (<>
                              {" "}
                              <span style={{ "width": "30px", "height": "30px", "borderRadius": "9999px", "background": "#f5f5f5", "border": "1px solid " + S(_c_44?.["ring"]), "color": "#171717", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "11px", "fontWeight": "600", "flexShrink": "0" }}>
                                {T(_c_44?.["ini"])}
                              </span>
                              {" "}
                            </>) : null}
                            {" "}
                            <span style={{ "minWidth": "0", "flex": "1", "display": "flex", "flexDirection": "column", "gap": "2px" }}>
                              {" "}
                              <span style={{ "display": "flex", "alignItems": "center", "gap": "6px" }}>
                                {" "}
                                <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373" }}>
                                  {T(_c_44?.["code"])}
                                </span>
                                {" "}
                                <span style={{ "width": "5px", "height": "5px", "borderRadius": "9999px", "background": S(_c_44?.["dot"]), "flexShrink": "0" }}></span>
                                {" "}
                                <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "flexShrink": "0" }}>
                                  {T(_c_44?.["when"])}
                                </span>
                                {" "}
                              </span>
                              {" "}
                              <span style={{ "fontSize": "13px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                {T(_c_44?.["titulo"])}
                              </span>
                              {" "}
                              <span style={{ "fontSize": "12px", "color": S(_c_44?.["lastInk"]), "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                {T(_c_44?.["last"])}
                              </span>
                              {" "}
                              {_c_44?.["waiting"] ? (<>
                                {" "}
                                <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "5px", "fontSize": "11px", "fontWeight": "500", "color": "#171717", "background": S(_c_44?.["waitBg"]), "borderRadius": "9999px", "padding": "2px 8px", "alignSelf": "flex-start", "marginTop": "2px" }}>
                                  {" "}
                                  <span style={{ "width": "5px", "height": "5px", "borderRadius": "9999px", "background": S(_c_44?.["waitDot"]), "flexShrink": "0" }}></span>
                                  {T(_c_44?.["waitLabel"])}{" "}
                                </span>
                                {" "}
                              </>) : null}
                              {" "}
                            </span>
                            {" "}
                          </button>
                          {" "}
                        </React.Fragment>
                      ))}
                      {" "}
                      {V["chatEmpty"] ? (<>
                        {" "}
                        <div style={{ "padding": "40px 20px", "textAlign": "center" }}>
                          {" "}
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "margin": "0 auto 8px", "display": "block" }}>
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                          </svg>
                          {" "}
                          <div style={{ "fontSize": "13px", "color": "#525252" }}>
                            {"Ningún ticket coincide con lo que buscás."}
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
                </>) : null}
                {" "}
                {V["chatShowRight"] ? (<>
                  {" "}
                  <div style={{ "display": "flex", "flexDirection": "column", "minHeight": "0", "minWidth": "0" }}>
                    {" "}
                    {V["chatPageConv"] ? (<>
                      {" "}
                      <div style={{ "display": "flex", "alignItems": "center", "gap": "10px", "padding": "12px 16px", "borderBottom": "1px solid #e5e5e5", "flexShrink": "0" }}>
                        {" "}
                        <button onClick={V["onChatBack"]} aria-label="Cerrar la conversación" title="Cerrar la conversación" style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scpm scpt">
                          <svg style={{ "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                          </svg>
                        </button>
                        {" "}
                        <div style={{ "minWidth": "0", "flex": "1" }}>
                          {" "}
                          <div style={{ "display": "flex", "alignItems": "center", "gap": "6px" }}>
                            {" "}
                            <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373" }}>
                              {T(V["chatCode"])}
                            </span>
                            {" "}
                            <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(V["chatStatusDot"]), "flexShrink": "0" }}></span>
                            {" "}
                            <span style={{ "fontSize": "11px", "color": "#737373" }}>
                              {T(V["chatStatusLabel"])}
                            </span>
                            {" "}
                          </div>
                          {" "}
                          <div style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                            {T(V["chatTitulo"])}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {V["chatCallOn"] ? (<>
                          {" "}
                          <a href={V["chatCallUrl"]} onClick={V["onChatCall"]} target="_blank" rel="noreferrer" aria-label={V["chatCallLabel"]} title={V["chatCallLabel"]} style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)" }} className="scp24 scp25">
                            <svg style={{ "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                            </svg>
                          </a>
                          {" "}
                        </>) : null}
                        {" "}
                        {V["chatCanEdit"] ? (<>
                          {" "}
                          <button onClick={V["onChatEdit"]} aria-label="Editar este ticket" title="Editar título, categoría o prioridad" style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scp1i scpt">
                            <svg style={{ "transform": "var(--im,rotate(0deg) scale(1)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                            </svg>
                          </button>
                          {" "}
                        </>) : null}
                        {" "}
                        {V["chatNudgeShow"] ? (<>
                          {" "}
                          <button onClick={V["onChatNudge"]} disabled={V["chatNudgeDis"]} aria-label={V["chatNudgeLabel"]} title={V["chatNudgeLabel"]} style={{ "opacity": S(V["chatNudgeOp"]), "cursor": S(V["chatNudgeCur"]), "background": "#fef3c7", "border": "1px solid #ea580c", "borderRadius": "8px", "padding": "6px", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0", "transition": "transform var(--duration-fast) var(--ease-standard)" }} className="scp8">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                              <path d="M12 9v4"></path>
                              <path d="M12 17h.01"></path>
                            </svg>
                          </button>
                          {" "}
                        </>) : null}
                        {" "}
                        {V["chatResolvedShow"] ? (<>
                          {" "}
                          <button onClick={V["onChatResolved"]} disabled={V["chatResolvedDis"]} aria-label={V["chatResolvedLabel"]} title={V["chatResolvedLabel"]} style={{ "opacity": S(V["chatResolvedOp"]), "cursor": S(V["chatResolvedCur"]), "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px 10px", "display": "inline-flex", "alignItems": "center", "gap": "6px", "flexShrink": "0", "fontSize": "12px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpg scp6">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            {T(V["chatResolvedShort"])}
                          </button>
                          {" "}
                        </>) : null}
                        {" "}
                        {V["chatCanReopen"] ? (<>
                          {" "}
                          <button onClick={V["onChatReopen"]} aria-label="Reabrir este ticket" title="Vuelve a estado Abierto para poder responder" style={{ "background": "#fef3c7", "border": "1px solid #ea580c", "borderRadius": "8px", "padding": "6px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scp26 scp27">
                            <svg style={{ "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard)", "stroke": "var(--is,#ea580c)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                              <path d="M3 3v5h5"></path>
                            </svg>
                          </button>
                          {" "}
                        </>) : null}
                        {" "}
                        <button onClick={V["onChatOpenTicket"]} aria-label="Abrir el ticket completo" title="Abrir el ticket completo" style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scp28 scpt">
                          <svg style={{ "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h6v6"></path>
                            <path d="M10 14 21 3"></path>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          </svg>
                        </button>
                        {" "}
                      </div>
                      {" "}
                      <div ref={V["chatRef"]} style={{ "flex": "1", "minHeight": "0", "overflowY": "auto", "padding": "14px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "#fafafa" }}>
                        {" "}
                        <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "10px 12px" }}>
                          {" "}
                          <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "letterSpacing": "0.04em", "marginBottom": "4px" }}>
                            {"REPORTÓ "}{T(V["chatAutor"])}
                          </div>
                          {" "}
                          <div style={{ "fontSize": "13px", "lineHeight": "1.5", "color": "#262626", "textWrap": "pretty" }}>
                            {T(V["chatDesc"])}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {L(V["chatMsgs"]).map((_m_45, $index) => (
                          <React.Fragment key={$index}>
                            {" "}
                            <div style={{ "display": "flex", "gap": "8px", "justifyContent": S(_m_45?.["just"]), "animation": "bubbleIn var(--duration-base) var(--ease-standard) both" }}>
                              {" "}
                              {_m_45?.["theirs"] ? (<>
                                {" "}
                                {_m_45?.["hasBlob"] ? (<>
                                  {" "}
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" ref={_m_45?.["blobRef"]} alt="" style={{ "width": "26px", "height": "26px", "borderRadius": "9999px", "background": "#f5f5f5", "border": "1px solid " + S(_m_45?.["ring"]), "flexShrink": "0", "marginTop": "auto", "display": "block" }} />
                                  {" "}
                                </>) : null}
                                {" "}
                                {_m_45?.["noBlob"] ? (<>
                                  {" "}
                                  <span style={{ "width": "26px", "height": "26px", "borderRadius": "9999px", "background": "#f5f5f5", "border": "1px solid " + S(_m_45?.["ring"]), "color": "#171717", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "10px", "fontWeight": "600", "flexShrink": "0", "marginTop": "auto" }}>
                                    {T(_m_45?.["ini"])}
                                  </span>
                                  {" "}
                                </>) : null}
                                {" "}
                              </>) : null}
                              {" "}
                              <span style={{ "maxWidth": "78%", "display": "flex", "flexDirection": "column", "gap": "3px", "alignItems": S(_m_45?.["align"]) }}>
                                {" "}
                                <span style={{ "fontSize": "11px", "color": "#737373" }}>
                                  {T(_m_45?.["head"])}
                                </span>
                                {" "}
                                {_m_45?.["isText"] ? (<>
                                  <span style={{ "background": S(_m_45?.["bg"]), "color": S(_m_45?.["ink"]), "border": S(_m_45?.["border"]), "borderRadius": "14px", "padding": "9px 12px", "fontSize": "13px", "lineHeight": "1.5", "textWrap": "pretty" }}>
                                    {T(_m_45?.["texto"])}
                                  </span>
                                </>) : null}
                                {" "}
                                {_m_45?.["isFile"] ? (<>
                                  {" "}
                                  <button onClick={_m_45?.["open"]} aria-label="Ver imagen en grande" title="Ver en grande" style={{ "padding": "0", "border": "1px solid #e5e5e5", "borderRadius": "14px", "overflow": "hidden", "background": "#ffffff", "cursor": "zoom-in", "display": "flex", "flexDirection": "column", "width": "240px", "maxWidth": "100%", "textAlign": "left", "fontFamily": "inherit", "transition": "transform var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp29 scph">
                                    {" "}
                                    {_m_45?.["fileHasUrl"] ? (<>
                                      <img src={_m_45?.["fileUrl"]} alt={_m_45?.["fileName"]} style={{ "display": "block", "width": "100%", "height": "160px", "objectFit": "cover", "background": "#f5f5f5" }} />
                                    </>) : null}
                                    {" "}
                                    {_m_45?.["fileNoUrl"] ? (<>
                                      <span style={{ "height": "120px", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "repeating-linear-gradient(135deg,#f5f5f5 0 8px,#efefef 8px 16px)" }}>
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "transform": "scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                                          <circle cx="9" cy="9" r="2"></circle>
                                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                                        </svg>
                                      </span>
                                    </>) : null}
                                    {" "}
                                    <span style={{ "padding": "8px 10px", "display": "flex", "alignItems": "center", "gap": "8px", "minWidth": "0" }}>
                                      {" "}
                                      <span style={{ "minWidth": "0", "flex": "1", "display": "flex", "flexDirection": "column", "gap": "2px" }}>
                                        {" "}
                                        <span style={{ "fontSize": "12px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                          {T(_m_45?.["fileName"])}
                                        </span>
                                        {" "}
                                        <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                          {T(_m_45?.["fileMeta"])}
                                        </span>
                                        {" "}
                                      </span>
                                      {" "}
                                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M9 21H3v-6"></path>
                                        <path d="M21 3l-7 7"></path>
                                        <path d="M3 21l7-7"></path>
                                      </svg>
                                      {" "}
                                    </span>
                                    {" "}
                                  </button>
                                  {" "}
                                </>) : null}
                                {" "}
                              </span>
                              {" "}
                            </div>
                            {" "}
                          </React.Fragment>
                        ))}
                        {" "}
                        {V["chatNoMsgs"] ? (<>
                          {" "}
                          <div style={{ "textAlign": "center", "padding": "16px 8px", "fontSize": "12px", "color": "#737373" }}>
                            {"Todavía nadie respondió. Lo que escribas acá se publica como comentario del ticket."}
                          </div>
                          {" "}
                        </>) : null}
                        {" "}
                      </div>
                      {" "}
                      <div style={{ "borderTop": "1px solid #e5e5e5", "padding": "10px 12px", "display": "flex", "flexDirection": "column", "gap": "8px", "flexShrink": "0" }}>
                        {" "}
                        {V["chatReplyLocked"] ? (<>
                          {" "}
                          <div role="note" style={{ "display": "flex", "gap": "10px", "alignItems": "center", "background": "#f5f5f5", "borderRadius": "10px", "padding": "10px 12px" }}>
                            {" "}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            {" "}
                            <span style={{ "minWidth": "0", "flex": "1", "fontSize": "13px", "lineHeight": "1.45", "color": "#262626", "textWrap": "pretty" }}>
                              {T(V["chatReplyLockMsg"])}
                            </span>
                            {" "}
                            {V["chatReplyLockTake"] ? (<>
                              {" "}
                              <button onClick={V["chatReplyOnTake"]} style={{ "flexShrink": "0", "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "13px", "fontWeight": "500", "cursor": "pointer", "whiteSpace": "nowrap", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1n scp6">
                                {T(V["chatReplyTakeLabel"])}
                              </button>
                              {" "}
                            </>) : null}
                            {" "}
                          </div>
                          {" "}
                        </>) : null}
                        {" "}
                        {V["chatCanReply"] ? (<>
                          {" "}
                          {V["chatHasStaged"] ? (<>
                            {" "}
                            <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "animation": "dropIn var(--duration-base) var(--ease-standard) both" }}>
                              {" "}
                              <div style={{ "display": "flex", "gap": "8px", "flexWrap": "wrap" }}>
                                {" "}
                                {L(V["chatStaged"]).map((_p_46, $index) => (
                                  <React.Fragment key={$index}>
                                    {" "}
                                    <span style={{ "position": "relative", "width": "64px", "height": "64px", "flexShrink": "0", "animation": "badgePop 320ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
                                      {" "}
                                      <button onClick={_p_46?.["open"]} aria-label="Ver antes de enviar" title={_p_46?.["nombre"]} style={{ "width": "100%", "height": "100%", "padding": "0", "border": "1px solid #e5e5e5", "borderRadius": "10px", "overflow": "hidden", "background": "#f5f5f5", "cursor": "zoom-in", "display": "block" }}>
                                        <img src={_p_46?.["url"]} alt={_p_46?.["nombre"]} style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block" }} />
                                      </button>
                                      {" "}
                                      <button onClick={_p_46?.["remove"]} aria-label="Quitar imagen" title="Quitar" style={{ "position": "absolute", "top": "-6px", "right": "-6px", "width": "22px", "height": "22px", "borderRadius": "9999px", "border": "2px solid #ffffff", "background": "#171717", "color": "#ffffff", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "padding": "0", "transition": "transform var(--duration-fast) var(--ease-standard)" }} className="scp2a scp2b">
                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round">
                                          <path d="M18 6 6 18"></path>
                                          <path d="m6 6 12 12"></path>
                                        </svg>
                                      </button>
                                      {" "}
                                    </span>
                                    {" "}
                                  </React.Fragment>
                                ))}
                                {" "}
                              </div>
                              {" "}
                              <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252" }}>
                                {T(V["chatStagedNote"])}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </>) : null}
                          {" "}
                          {V["chatUploading"] ? (<>
                            {" "}
                            <div role="status" aria-live="polite" aria-label={V["chatUpNote"]} style={{ "display": "flex", "gap": "8px", "flexWrap": "wrap" }}>
                              {" "}
                              {L(V["chatUpTiles"]).map((_u_47, $index) => (
                                <React.Fragment key={$index}>
                                  {" "}
                                  <span title={_u_47?.["nombre"]} style={{ "position": "relative", "width": "64px", "height": "64px", "flexShrink": "0", "borderRadius": "10px", "background": "#0a0a0a", "overflow": "hidden", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "6px", "animation": "badgePop 320ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
                                    {" "}
                                    <span aria-hidden="true" style={{ "position": "relative", "display": "inline-block", "height": "12px", "flexShrink": "0" }}>
                                      <img src="/marca/legumex-isotipo.png" alt="" style={{ "height": "12px", "width": "auto", "display": "block", "opacity": "0.28", "filter": "brightness(0) invert(1)" }} />
                                      <img src="/marca/legumex-isotipo.png" alt="" style={{ "position": "absolute", "left": "0", "top": "0", "height": "12px", "width": "auto", "display": "block", "clipPath": "inset(0 " + S(_u_47?.["rest"]) + " 0 0)", "transition": "clip-path 240ms linear", "filter": "brightness(0) invert(1)" }} />
                                    </span>
                                    {" "}
                                    <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "10px", "color": "#ffffff", "letterSpacing": "0.04em" }}>
                                      {T(_u_47?.["pctLabel"])}
                                    </span>
                                    {" "}
                                  </span>
                                  {" "}
                                </React.Fragment>
                              ))}
                              {" "}
                            </div>
                            {" "}
                          </>) : null}
                          {" "}
                          {V["chatUpFail"] ? (<>
                            {" "}
                            <div role="alert" style={{ "display": "flex", "alignItems": "center", "gap": "8px", "background": "#fef3c7", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px 8px", "fontSize": "12px", "color": "#262626" }}>
                              <span style={{ "minWidth": "0", "flex": "1" }}>
                                {T(V["chatUpFailMsg"])}
                              </span>
                              <button onClick={V["onChatUpFailX"]} aria-label="Descartar aviso" style={{ "background": "none", "border": "none", "cursor": "pointer", "padding": "2px", "display": "flex" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2" strokeLinecap="round">
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path>
                                </svg>
                              </button>
                            </div>
                            {" "}
                          </>) : null}
                          {" "}
                          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "6px" }}>
                            {" "}
                            {L(V["chatMacros"]).map((_m_48, $index) => (
                              <React.Fragment key={$index}>
                                {" "}
                                <button onClick={_m_48?.["use"]} title={_m_48?.["text"]} style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "12px", "color": "#404040", "cursor": "pointer", "whiteSpace": "nowrap", "flexShrink": "0", "transition": "background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp2c scpt">
                                  {T(_m_48?.["label"])}
                                </button>
                                {" "}
                              </React.Fragment>
                            ))}
                            {" "}
                          </div>
                          {" "}
                          <div style={{ "display": "flex", "gap": "8px", "alignItems": "flex-end" }}>
                            {" "}
                            <label aria-label="Adjuntar imagen" title="Adjuntar imagen · JPG, PNG o WEBP hasta 5 MB" style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "10px", "padding": "10px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp2d scp8">
                              <input type="file" accept="image/jpeg,image/png,image/webp" multiple="" onChange={V["onChatPick"]} style={{ "position": "absolute", "width": "1px", "height": "1px", "opacity": "0", "pointerEvents": "none" }} />
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                              </svg>
                            </label>
                            {" "}
                            <textarea value={(V["chatMsg"] ?? "")} onChange={V["onChatMsg"]} onKeyDown={V["onChatKey"]} rows="2" placeholder="Escribí tu respuesta — Enter envía, Shift+Enter salta línea" style={{ "flex": "1", "minWidth": "0", "background": "#ffffff", "color": "#111827", "border": "1px solid #e5e5e5", "borderRadius": "10px", "padding": "9px 11px", "fontSize": "13px", "lineHeight": "1.5", "fontFamily": "inherit", "resize": "none", "outline": "none" }}></textarea>
                            {" "}
                            <button onClick={V["onChatSend"]} aria-label="Enviar respuesta" title="Enviar respuesta" style={{ "background": "#0a0a0a", "color": "#ffffff", "border": "none", "borderRadius": "10px", "padding": "10px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1c scp8">
                              {V["chatIdle"] ? (<>
                                <svg style={{ "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)" }} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                                  <path d="M22 2 11 13"></path>
                                </svg>
                              </>) : null}
                              {V["chatSending"] ? (<>
                                <span style={{ "width": "16px", "height": "16px", "display": "flex", "alignItems": "center", "justifyContent": "center", "overflow": "visible" }}>
                                  <span aria-hidden="true" style={{ "position": "relative", "display": "inline-block", "height": "6px", "flexShrink": "0" }}>
                                    <img src="/marca/legumex-isotipo.png" alt="" style={{ "height": "6px", "width": "auto", "display": "block", "opacity": "0.28", "filter": "brightness(0) invert(1)" }} />
                                    <img src="/marca/legumex-isotipo.png" alt="" style={{ "position": "absolute", "left": "0", "top": "0", "height": "6px", "width": "auto", "display": "block", "animation": "logoLoop 1100ms cubic-bezier(0.65,0,0.35,1) infinite", "filter": "brightness(0) invert(1)" }} />
                                  </span>
                                </span>
                              </>) : null}
                            </button>
                            {" "}
                          </div>
                          {" "}
                          {V["chatHasErr"] ? (<>
                            {" "}
                            <div role="alert" style={{ "display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "12px", "lineHeight": "1.4", "color": "#171717" }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 8v4"></path>
                                <path d="M12 16h.01"></path>
                              </svg>
                              {T(V["chatErr"])}
                            </div>
                            {" "}
                          </>) : null}
                          {" "}
                          {V["chatCanClose"] ? (<>
                            {" "}
                            <button onClick={V["onChatSendClose"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "7px 10px", "fontSize": "12px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "gap": "6px", "transition": "background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scpi scpt">
                              {" "}
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                              </svg>
                              {"Responder y cerrar el ticket "}
                            </button>
                            {" "}
                          </>) : null}
                          {" "}
                        </>) : null}
                        {" "}
                      </div>
                      {" "}
                    </>) : null}
                    {" "}
                    {V["chatPageEmpty"] ? (<>
                      {" "}
                      <div style={{ "flex": "1", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "10px", "padding": "32px", "textAlign": "center", "background": "#fafafa" }}>
                        {" "}
                        <span style={{ "width": "56px", "height": "56px", "borderRadius": "9999px", "background": "#ffffff", "border": "1px solid #e5e5e5", "display": "flex", "alignItems": "center", "justifyContent": "center", "animation": "badgePop 480ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            <path d="M8 9h8"></path>
                            <path d="M8 13h5"></path>
                          </svg>
                        </span>
                        {" "}
                        <div style={{ "fontSize": "16px", "fontWeight": "600", "color": "#171717" }}>
                          {T(V["chatEmptyTitle"])}
                        </div>
                        {" "}
                        <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "maxWidth": "360px", "textWrap": "pretty" }}>
                          {T(V["chatPageHint"])}
                        </div>
                        {" "}
                        {V["chatHasWait"] ? (<>
                          {" "}
                          <div style={{ "width": "100%", "maxWidth": "440px", "display": "flex", "flexDirection": "column", "gap": "8px", "marginTop": "10px", "textAlign": "left" }}>
                            {" "}
                            {L(V["chatWaitList"]).map((_w_49, $index) => (
                              <React.Fragment key={$index}>
                                {" "}
                                <button onClick={_w_49?.["go"]} style={{ "display": "flex", "alignItems": "center", "gap": "12px", "width": "100%", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "12px 14px", "cursor": "pointer", "textAlign": "left", "transition": "transform var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)", "animation": "dropIn var(--duration-base) var(--ease-standard) " + S(_w_49?.["delay"]) + " both" }} className="scp2e scp2f">
                                  {" "}
                                  <span style={{ "width": "8px", "height": "8px", "borderRadius": "9999px", "background": "#0891b2", "flexShrink": "0" }}></span>
                                  {" "}
                                  <span style={{ "minWidth": "0", "flex": "1", "display": "flex", "flexDirection": "column", "gap": "2px" }}>
                                    {" "}
                                    <span style={{ "display": "flex", "gap": "8px", "alignItems": "baseline", "minWidth": "0" }}>
                                      {" "}
                                      <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "flexShrink": "0" }}>
                                        {T(_w_49?.["code"])}
                                      </span>
                                      {" "}
                                      <span style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis", "minWidth": "0" }}>
                                        {T(_w_49?.["titulo"])}
                                      </span>
                                      {" "}
                                      {_w_49?.["ownOn"] ? (<>
                                        <span style={{ "flexShrink": "0", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "10px", "letterSpacing": "0.06em", "color": S(_w_49?.["ownInk"]), "border": "1px solid " + S(_w_49?.["ownBorder"]), "borderRadius": "9999px", "padding": "1px 7px" }}>
                                          {T(_w_49?.["own"])}
                                        </span>
                                      </>) : null}
                                      {" "}
                                      <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "flexShrink": "0" }}>
                                        {T(_w_49?.["when"])}
                                      </span>
                                      {" "}
                                    </span>
                                    {" "}
                                    <span style={{ "fontSize": "13px", "color": "#525252", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                                      {T(_w_49?.["last"])}
                                    </span>
                                    {" "}
                                  </span>
                                  {" "}
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                  {" "}
                                </button>
                                {" "}
                              </React.Fragment>
                            ))}
                            {" "}
                          </div>
                          {" "}
                        </>) : null}
                        {" "}
                      </div>
                      {" "}
                    </>) : null}
                    {" "}
                  </div>
                  {" "}
                </>) : null}
                {" "}
              </div>
              {" "}
            </>) : null}
            {" "}
            {V["showEntity"] ? (<>
              {" "}
              <div style={{ "maxWidth": "720px" }}>
                {" "}
                <div style={{ "display": "flex", "marginBottom": "16px" }}>
                  <button onClick={V["onHeaderBack"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "flexShrink": "0", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpm scp4">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    {"Volver sin guardar"}
                  </button>
                </div>
                {" "}
                <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "20px" }}>
                  {" "}
                  {V["entMeta"] ? (<>
                    {" "}
                    <div style={{ "display": "flex", "alignItems": "center", "gap": "10px", "flexWrap": "wrap", "borderBottom": "1px solid #e5e5e5", "paddingBottom": "16px" }}>
                      {" "}
                      <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em", "background": "#f5f5f5", "borderRadius": "6px", "padding": "4px 8px" }}>
                        {T(V["entCode"])}
                      </span>
                      {" "}
                      <span style={{ "fontSize": "14px", "color": "#737373" }}>
                        {T(V["entMetaNote"])}
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </>) : null}
                  {" "}
                  <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                    {" "}
                    <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                      {T(V["entNameLabel"])}
                    </label>
                    {" "}
                    <input value={(V["entName"] ?? "")} onChange={V["onEntName"]} placeholder={V["entNamePh"]} style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid " + S(V["entNameBorder"]), "borderRadius": "6px", "padding": "10px 12px", "fontSize": "14px", "outline": "none" }} />
                    {" "}
                    <span style={{ "fontSize": "12px", "color": "#737373" }}>
                      {T(V["entNameHelp"])}
                    </span>
                    {" "}
                  </div>
                  {" "}
                  {V["entIsCat"] ? (<>
                    {" "}
                    <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                      {" "}
                      <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                        {"Descripción corta"}
                      </label>
                      {" "}
                      <textarea value={(V["entDesc"] ?? "")} onChange={V["onEntDesc"]} rows="3" placeholder="Qué tipo de problemas entran acá" style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid #e5e5e5", "borderRadius": "6px", "padding": "10px 12px", "fontSize": "14px", "lineHeight": "1.5", "fontFamily": "inherit", "resize": "vertical", "outline": "none" }}></textarea>
                      {" "}
                      <span style={{ "fontSize": "12px", "color": "#737373" }}>
                        {"Ayuda a quien reporta a elegir bien. Se ve en el formulario de creación."}
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </>) : null}
                  {" "}
                  {V["entIsUser"] ? (<>
                    {" "}
                    <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                      {" "}
                      <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                        {"Correo institucional"}
                      </label>
                      {" "}
                      <input value={(V["entEmail"] ?? "")} onChange={V["onEntEmail"]} placeholder="nombre@tic.gob" style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid " + S(V["entEmailBorder"]), "borderRadius": "6px", "padding": "10px 12px", "fontSize": "14px", "outline": "none" }} />
                      {" "}
                      <span style={{ "fontSize": "12px", "color": "#737373" }}>
                        {"Es el usuario con el que inicia sesión."}
                      </span>
                      {" "}
                    </div>
                    {V["entPwdOn"] ? (<>
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                        <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>{T(V["entPwdLabel"])}</label>
                        <input type="password" autoComplete="new-password" value={(V["entPwd"] ?? "")} onChange={V["onEntPwd"]} placeholder="Mínimo 8 caracteres" style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid " + S(V["entPwdBorder"]), "borderRadius": "6px", "padding": "10px 12px", "fontSize": "14px", "outline": "none", "boxSizing": "border-box" }} />
                        <span style={{ "fontSize": "12px", "color": "#737373", "textWrap": "pretty" }}>{T(V["entPwdHelp"])}</span>
                      </div>
                    </>) : null}
                    {" "}
                    <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                      {" "}
                      <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                        {"Rol"}
                      </label>
                      {" "}
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                        {" "}
                        {L(V["entRoles"]).map((_r_50, $index) => (
                          <React.Fragment key={$index}>
                            {" "}
                            <button onClick={_r_50?.["go"]} style={{ "display": "flex", "alignItems": "flex-start", "gap": "10px", "width": "100%", "textAlign": "left", "background": "#ffffff", "border": "1px solid " + S(_r_50?.["border"]), "borderRadius": "10px", "padding": "12px", "cursor": "pointer", "transition": "border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpg scpt">
                              {" "}
                              <span style={{ "width": "16px", "height": "16px", "borderRadius": "9999px", "border": "1px solid " + S(_r_50?.["dotBorder"]), "background": S(_r_50?.["dotBg"]), "flexShrink": "0", "marginTop": "2px", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                                {" "}
                                {_r_50?.["on"] ? (<>
                                  <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": "#ffffff" }}></span>
                                </>) : null}
                                {" "}
                              </span>
                              {" "}
                              <span style={{ "minWidth": "0" }}>
                                {" "}
                                <span style={{ "display": "block", "fontSize": "14px", "fontWeight": "500", "color": "#171717" }}>
                                  {T(_r_50?.["label"])}
                                </span>
                                {" "}
                                <span style={{ "display": "block", "fontSize": "12px", "color": "#737373", "marginTop": "2px", "textWrap": "pretty" }}>
                                  {T(_r_50?.["note"])}
                                </span>
                                {" "}
                              </span>
                              {" "}
                            </button>
                            {" "}
                          </React.Fragment>
                        ))}
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </>) : null}
                  {" "}
                  {V["entErr"] ? (<>
                    {" "}
                    <div style={{ "display": "flex", "gap": "8px", "alignItems": "flex-start", "background": "#fef3c7", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "12px" }}>
                      {" "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                      {" "}
                      <span style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#171717" }}>
                        {T(V["entErr"])}
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </>) : null}
                  {" "}
                  <div style={{ "display": "flex", "gap": "8px", "borderTop": "1px solid #e5e5e5", "paddingTop": "20px" }}>
                    {" "}
                    <button onClick={V["onEntSave"]} style={{ "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "12px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1c scp2">
                      {T(V["entOkLabel"])}
                    </button>
                    {" "}
                    <button onClick={V["onEntCancel"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "12px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpg scpd">
                      {"Cancelar"}
                    </button>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </>) : null}
            {" "}
            {V["showCats"] ? (<>
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
                  <button onClick={V["onNewCat"]} style={{ "marginLeft": "auto", "flexShrink": "0", "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "10px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp1h scpv">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)" }}>
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    {"Nueva categoría"}
                  </button>
                  {" "}
                </div>
                {" "}
                <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "overflow": "hidden" }}>
                  {" "}
                  <div style={{ "display": "grid", "gridTemplateColumns": "minmax(0,2fr) 110px 120px 96px", "gap": "16px", "alignItems": "center", "padding": "10px 16px", "background": "#f5f5f5", "borderBottom": "1px solid #e5e5e5", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
                    {" "}
                    <span>
                      {"CATEGORÍA"}
                    </span>
                    <span>
                      {"TICKETS"}
                    </span>
                    <span>
                      {"ACTIVA"}
                    </span>
                    <span></span>
                    {" "}
                  </div>
                  {" "}
                  {V["loading"] ? (<>
                    {" "}
                    {L(V["ghostRows"]).map((_g_51, $index) => (
                      <React.Fragment key={$index}>
                        {" "}
                        <div style={{ "display": "grid", "gridTemplateColumns": "minmax(0,2fr) 110px 120px 96px", "gap": "16px", "alignItems": "center", "padding": "12px 16px", "borderBottom": "1px solid #e5e5e5" }}>
                          {" "}
                          <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "minWidth": "0" }}>
                            {" "}
                            <span style={{ "display": "block", "width": S(_g_51?.["w"]), "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                            {" "}
                            <span style={{ "display": "block", "width": "64%", "height": "12px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                            {" "}
                          </div>
                          {" "}
                          <span style={{ "display": "block", "width": "24px", "height": "14px", "borderRadius": "6px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
                          {" "}
                          <span style={{ "display": "block", "width": "40px", "height": "22px", "borderRadius": "9999px", "background": "linear-gradient(90deg,#f5f5f5 0%,#e5e5e5 50%,#f5f5f5 100%)", "backgroundSize": "200% 100%", "animation": "shimmer 1.4s var(--ease-standard) infinite" }}></span>
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
                  {L(V["catRows"]).map((_c_52, $index) => (
                    <React.Fragment key={$index}>
                      {" "}
                      <div style={{ "display": "grid", "gridTemplateColumns": "minmax(0,2fr) 110px 120px 96px", "gap": "16px", "alignItems": "center", "padding": "12px 16px", "borderBottom": "1px solid #e5e5e5" }}>
                        {" "}
                        <div style={{ "minWidth": "0" }}>
                          {" "}
                          <div style={{ "fontSize": "14px", "lineHeight": "1.43", "fontWeight": "500", "color": "#171717" }}>
                            {T(_c_52?.["nombre"])}
                          </div>
                          {" "}
                          <div style={{ "fontSize": "12px", "color": "#737373", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                            {T(_c_52?.["descripcion"])}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "14px", "color": "#525252" }}>
                          {T(_c_52?.["tickets"])}
                        </span>
                        {" "}
                        <button onClick={_c_52?.["toggle"]} aria-label={_c_52?.["toggleLabel"]} title={_c_52?.["toggleLabel"]} style={{ "justifySelf": "start", "width": "40px", "height": "22px", "borderRadius": "9999px", "border": "1px solid " + S(_c_52?.["trackBorder"]), "background": S(_c_52?.["track"]), "padding": "2px", "cursor": "pointer", "display": "flex", "justifyContent": "flex-start", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp6">
                          {" "}
                          <span style={{ "width": "16px", "height": "16px", "borderRadius": "9999px", "background": "#ffffff", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transform": "translateX(" + S(_c_52?.["knob"]) + ")", "transition": "transform var(--duration-fast) var(--ease-standard)" }}></span>
                          {" "}
                        </button>
                        {" "}
                        <button onClick={_c_52?.["edit"]} style={{ "justifySelf": "start", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px 12px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "6px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp1i scp4">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,rotate(0deg) scale(1)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                          </svg>
                          {"Editar"}
                        </button>
                        {" "}
                      </div>
                      {" "}
                    </React.Fragment>
                  ))}
                  {" "}
                  {V["pgCats"]?.["show"] ? (<>
                    {" "}
                    <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "16px", "padding": "10px 16px", "background": "#f5f5f5", "borderTop": "1px solid #e5e5e5" }}>
                      {" "}
                      <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
                        {T(V["pgCats"]?.["range"])}
                      </span>
                      {" "}
                      <div style={{ "display": "flex", "gap": "8px" }}>
                        {" "}
                        <button onClick={V["pgCats"]?.["prev"]} disabled={V["pgCats"]?.["atStart"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "fontSize": "14px", "fontWeight": "500", "padding": "6px 12px", "cursor": S(V["pgCats"]?.["prevCursor"]), "opacity": S(V["pgCats"]?.["prevOpacity"]) }} className="scpl scp10">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                            <path d="m15 18-6-6 6-6"></path>
                          </svg>
                          {"Anterior"}
                        </button>
                        {" "}
                        <button onClick={V["pgCats"]?.["next"]} disabled={V["pgCats"]?.["atEnd"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "fontSize": "14px", "fontWeight": "500", "padding": "6px 12px", "cursor": S(V["pgCats"]?.["nextCursor"]), "opacity": S(V["pgCats"]?.["nextOpacity"]) }} className="scp1d scp10">
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
            </>) : null}
            {" "}
            {V["showUsers"] ? (<>
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
            </>) : null}
            {" "}
          </div>
          {" "}
        </main>
      </div>
    </>) : null}
    {V["modalOpen"] ? (<>
      <div style={{ "position": "fixed", "inset": "0", "background": "rgba(10,10,10,0.4)", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "24px", "zIndex": "40", "animation": S(V["overlayAnim"]) + " both" }}>
        {" "}
        <div style={{ "width": "100%", "maxWidth": "460px", "background": "#ffffff", "borderRadius": "16px", "padding": "24px", "animation": S(V["modalAnim"]) + " both", "boxShadow": "rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px" }}>
          {" "}
          <h3 style={{ "fontSize": "20px", "lineHeight": "1.4", "fontWeight": "600", "margin": "0", "color": "#171717" }}>
            {T(V["modalTitle"])}
          </h3>
          {" "}
          <p style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "margin": "6px 0 20px" }}>
            {T(V["modalSub"])}
          </p>
          {" "}
          {V["modalHasName"] ? (<>
            {" "}
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "marginBottom": "16px" }}>
              {" "}
              <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                {T(V["modalNameLabel"])}
              </label>
              {" "}
              <input value={(V["modalName"] ?? "")} onChange={V["onModalName"]} style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid #000000", "borderRadius": "6px", "padding": "10px 12px", "fontSize": "14px", "outline": "none" }} />
              {" "}
            </div>
            {" "}
          </>) : null}
          {" "}
          {V["modalHasDesc"] ? (<>
            {" "}
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "marginBottom": "16px" }}>
              {" "}
              <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                {T(V["modalDescLabel"])}
              </label>
              {" "}
              <textarea value={(V["modalDesc"] ?? "")} onChange={V["onModalDesc"]} rows="3" style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid #000000", "borderRadius": "6px", "padding": "10px 12px", "fontSize": "14px", "lineHeight": "1.5", "outline": "none", "resize": "vertical" }}></textarea>
              {" "}
            </div>
            {" "}
          </>) : null}
          {" "}
          {V["modalHasEmail"] ? (<>
            {" "}
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "marginBottom": "16px" }}>
              {" "}
              <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                {"Correo institucional"}
              </label>
              {" "}
              <input value={(V["modalEmail"] ?? "")} onChange={V["onModalEmail"]} placeholder="nombre@tic.gob" style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid #000000", "borderRadius": "6px", "padding": "10px 12px", "fontSize": "14px", "outline": "none" }} />
              {" "}
            </div>
            {V["modalPwdOn"] ? (<>
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "marginBottom": "16px" }}>
                <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>{T(V["modalPwdLabel"])}</label>
                <input type="password" autoComplete="new-password" value={(V["modalPwd"] ?? "")} onChange={V["onModalPwd"]} placeholder="Mínimo 8 caracteres" style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid " + S(V["modalPwdBorder"]), "borderRadius": "6px", "padding": "10px 12px", "fontSize": "14px", "outline": "none", "boxSizing": "border-box" }} />
                <span style={{ "fontSize": "12px", "color": "#737373", "textWrap": "pretty" }}>{T(V["modalPwdHelp"])}</span>
              </div>
            </>) : null}
            {" "}
          </>) : null}
          {" "}
          {V["modalHasRol"] ? (<>
            {" "}
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "marginBottom": "16px" }}>
              {" "}
              <label style={{ "fontSize": "12px", "fontWeight": "600", "color": "#171717" }}>
                {"Rol"}
              </label>
              {" "}
              <div style={{ "position": "relative" }}>
                {" "}
                <select value={(V["modalRol"] ?? "")} onChange={V["onModalRol"]} style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid #000000", "borderRadius": "6px", "padding": "10px 34px 10px 12px", "fontSize": "14px", "outline": "none", "appearance": "none", "WebkitAppearance": "none" }}>
                  {" "}
                  <option value="usuario">
                    {"Usuario"}
                  </option>
                  {" "}
                  <option value="admin">
                    {"Administrador"}
                  </option>
                  {" "}
                </select>
                {" "}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "position": "absolute", "right": "11px", "top": "50%", "transform": "translateY(-50%)", "pointerEvents": "none" }}>
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </>) : null}
          {" "}
          {V["modalErr"] ? (<>
            {" "}
            <div style={{ "display": "flex", "gap": "8px", "alignItems": "flex-start", "background": "#fef3c7", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "12px", "marginBottom": "16px" }}>
              {" "}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
              {" "}
              <span style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#171717" }}>
                {T(V["modalErr"])}
              </span>
              {" "}
            </div>
            {" "}
          </>) : null}
          {" "}
          {V["modalCanSkip"] ? (<>
            {" "}
            <label style={{ "display": "flex", "alignItems": "center", "gap": "10px", "margin": "0 0 16px", "minHeight": "44px", "cursor": "pointer", "fontSize": "14px", "color": "#262626" }}>
              {" "}
              <input type="checkbox" checked={(V["modalSkip"] ?? false)} onChange={V["onModalSkip"]} style={{ "width": "18px", "height": "18px", "margin": "0", "accentColor": "#171717", "cursor": "pointer", "flexShrink": "0" }} />
              {" No volver a preguntar en esta sesión "}
            </label>
            {" "}
          </>) : null}
          {" "}
          <div style={{ "display": "flex", "gap": "8px", "justifyContent": "flex-end", "borderTop": "1px solid #e5e5e5", "paddingTop": "20px" }}>
            {" "}
            <button onClick={V["onModalCancel"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "10px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scpg scp4">
              {"Cancelar"}
            </button>
            {" "}
            {V["modalIsDanger"] ? (<>
              {" "}
              <button onClick={V["onModalOk"]} style={{ "position": "relative", "background": "#fef3c7", "color": "#171717", "border": "1px solid #ea580c", "borderRadius": "8px", "padding": "10px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scp1m scp4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#ea580c)", "animation": S(V["tapModalOk"]) }}>
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                <span style={{ "opacity": S(V["busyModalOp"]), "transition": "opacity var(--duration-fast) var(--ease-standard)" }}>
                  {T(V["modalOkLabel"])}
                </span>
                {V["busyModal"] ? (<>
                  <span style={{ "position": "absolute", "inset": "0", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                    <span style={{ "width": "16px", "height": "16px", "borderRadius": "9999px", "border": "2px solid #171717", "borderTopColor": "transparent", "animation": "spin 600ms linear infinite" }}></span>
                  </span>
                </>) : null}
              </button>
              {" "}
            </>) : null}
            {" "}
            {V["modalIsSafe"] ? (<>
              {" "}
              <button onClick={V["onModalOk"]} style={{ "position": "relative", "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "10px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)" }} className="scpv">
                <span style={{ "opacity": S(V["busyModalOp"]), "transition": "opacity var(--duration-fast) var(--ease-standard)" }}>
                  {T(V["modalOkLabel"])}
                </span>
                {V["busyModal"] ? (<>
                  <span style={{ "position": "absolute", "inset": "0", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                    <span style={{ "width": "16px", "height": "16px", "borderRadius": "9999px", "border": "2px solid #ffffff", "borderTopColor": "transparent", "animation": "spin 600ms linear infinite" }}></span>
                  </span>
                </>) : null}
              </button>
              {" "}
            </>) : null}
            {" "}
          </div>
          {" "}
        </div>
      </div>
    </>) : null}
    {V["celebrating"] ? (<>
      <div style={{ "position": "fixed", "inset": "0", "background": "rgba(10,10,10,0.4)", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "24px", "zIndex": "60", "animation": "overlayIn var(--duration-base) var(--ease-standard) both" }}>
        {" "}
        <div style={{ "width": "100%", "maxWidth": "420px", "background": "#ffffff", "borderRadius": "16px", "padding": "32px", "textAlign": "center", "animation": "celebIn 420ms cubic-bezier(0.34,1.56,0.64,1) both", "boxShadow": "rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px" }}>
          {" "}
          <div style={{ "position": "relative", "width": "96px", "height": "96px", "margin": "0 auto 20px" }}>
            {" "}
            <span aria-hidden="true" style={{ "position": "absolute", "inset": "0", "borderRadius": "9999px", "border": "1px solid #16a34a", "animation": "ringOut 900ms var(--ease-standard) 120ms both" }}></span>
            {" "}
            <span aria-hidden="true" style={{ "position": "absolute", "inset": "0", "borderRadius": "9999px", "border": "1px solid #16a34a", "animation": "ringOut 900ms var(--ease-standard) 320ms both" }}></span>
            {" "}
            <div style={{ "position": "absolute", "inset": "16px", "borderRadius": "9999px", "background": "#dcfce7", "display": "flex", "alignItems": "center", "justifyContent": "center", "animation": "badgePop 480ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
              {" "}
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="m4.5 12.5 5 5 10-10" strokeDasharray="26" style={{ "animation": "checkDraw 520ms var(--ease-standard) 240ms both" }}></path>
              </svg>
              {" "}
            </div>
            {" "}
            {L(V["sparks"]).map((_sp_55, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <span aria-hidden="true" style={{ "position": "absolute", "left": "50%", "top": "50%", "width": "0", "height": "0", "transform": "rotate(" + S(_sp_55?.["deg"]) + ")" }}>
                  {" "}
                  <span style={{ "display": "block", "position": "absolute", "left": "-3px", "top": "-3px", "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(_sp_55?.["color"]), "animation": "sparkOut 820ms var(--ease-standard) " + S(_sp_55?.["delay"]) + " both" }}></span>
                  {" "}
                </span>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
            {T(V["celebCode"])}{" CREADO"}
          </div>
          {" "}
          <div style={{ "fontSize": "20px", "lineHeight": "1.4", "fontWeight": "600", "color": "#171717", "marginTop": "8px", "textWrap": "pretty" }}>
            {T(V["celebTitulo"])}
          </div>
          {" "}
          <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "marginTop": "6px", "textWrap": "pretty" }}>
            {T(V["celebSub"])}
          </div>
          {" "}
          {V["celebWarn"] ? (<>
            {" "}
            <div style={{ "display": "flex", "gap": "8px", "alignItems": "flex-start", "background": "#fef3c7", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "12px", "marginTop": "16px", "textAlign": "left" }}>
              {" "}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2"></path>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              {" "}
              <span style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#171717", "textWrap": "pretty" }}>
                {"El ticket se creó. Puede que el aviso por correo no haya salido — avisale al área si es urgente."}
              </span>
              {" "}
            </div>
            {" "}
          </>) : null}
          {" "}
          <div style={{ "height": "3px", "borderRadius": "9999px", "background": "#f5f5f5", "marginTop": "20px", "overflow": "hidden" }}>
            <span style={{ "display": "block", "height": "100%", "background": "#0a0a0a", "animation": "progressBar 1900ms linear both" }}></span>
          </div>
          {" "}
          <button onClick={V["onCelebNow"]} style={{ "marginTop": "16px", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "10px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp28 scpd">
            {"Ver el ticket ahora"}
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transition": "transform var(--duration-base) var(--ease-standard)", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          {" "}
        </div>
      </div>
    </>) : null}
    {V["lbOn"] ? (<>
      <div role="dialog" aria-modal="true" aria-label="Imagen ampliada" style={{ "position": "fixed", "inset": "0", "zIndex": "70", "background": "rgba(10,10,10,0.9)", "display": "flex", "flexDirection": "column", "animation": "overlayIn var(--duration-base) var(--ease-standard) both" }}>
        {" "}
        <div onClick={V["onLbClose"]} style={{ "position": "absolute", "inset": "0", "cursor": "zoom-out" }}></div>
        {" "}
        <div style={{ "position": "relative", "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 20px" }}>
          {" "}
          <div style={{ "minWidth": "0" }}>
            {" "}
            <div style={{ "fontSize": "14px", "fontWeight": "500", "color": "#ffffff", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
              {T(V["lbNombre"])}
            </div>
            {" "}
            <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#d4d4d4", "letterSpacing": "0.04em", "marginTop": "2px" }}>
              {T(V["lbMeta"])}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ "marginLeft": "auto", "display": "flex", "alignItems": "center", "gap": "8px", "flexShrink": "0" }}>
            {" "}
            {V["lbHasUrl"] ? (<>
              {" "}
              <div style={{ "display": "flex", "alignItems": "center", "gap": "6px", "marginRight": "8px" }}>
                {" "}
                <button onClick={V["onLbOut"]} aria-label="Alejar (−)" title="Alejar (−)" style={{ "background": "rgba(255,255,255,0.08)", "color": "#ffffff", "border": "1px solid rgba(255,255,255,0.28)", "borderRadius": "9999px", "width": "40px", "height": "40px", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp2g scp2h">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    <path d="M8 11h6"></path>
                  </svg>
                </button>
                {" "}
                <button onClick={V["onLbFit"]} aria-label="Ajustar a la pantalla (0)" title="Ajustar a la pantalla (0)" style={{ "minWidth": "56px", "height": "40px", "padding": "0 10px", "background": "rgba(255,255,255,0.08)", "color": "#ffffff", "border": "1px solid rgba(255,255,255,0.28)", "borderRadius": "9999px", "cursor": "pointer", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "12px", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scp2g">
                  {T(V["lbZoomLabel"])}
                </button>
                {" "}
                <button onClick={V["onLbIn"]} aria-label="Acercar (+)" title="Acercar (+)" style={{ "background": "rgba(255,255,255,0.08)", "color": "#ffffff", "border": "1px solid rgba(255,255,255,0.28)", "borderRadius": "9999px", "width": "40px", "height": "40px", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp2g scp2h">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    <path d="M11 8v6"></path>
                    <path d="M8 11h6"></path>
                  </svg>
                </button>
                {" "}
              </div>
              {" "}
            </>) : null}
            {" "}
            <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#d4d4d4", "marginRight": "4px" }}>
              {T(V["lbPos"])}
            </span>
            {" "}
            {V["lbHasUrl"] ? (<>
              {" "}
              <a href={V["lbUrl"]} download={V["lbNombre"]} aria-label="Descargar" title="Descargar" style={{ "background": "rgba(255,255,255,0.08)", "border": "1px solid rgba(255,255,255,0.28)", "borderRadius": "9999px", "width": "40px", "height": "40px", "display": "flex", "alignItems": "center", "justifyContent": "center", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scp2i">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "transform": "var(--im,translateY(0)) scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                  <path d="M12 15V3"></path>
                  <path d="m7 10 5 5 5-5"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                </svg>
              </a>
              {" "}
            </>) : null}
            {" "}
            <button onClick={V["onLbClose"]} aria-label="Cerrar vista" title="Cerrar vista" style={{ "background": "rgba(255,255,255,0.08)", "color": "#ffffff", "border": "1px solid rgba(255,255,255,0.28)", "borderRadius": "9999px", "width": "40px", "height": "40px", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp2j scp2h">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "transform": "scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ "position": "relative", "flex": "1", "minHeight": "0", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "0 80px 40px", "pointerEvents": "none" }}>
          {" "}
          {V["lbHasUrl"] ? (<>
            {" "}
            <div style={{ "position": "absolute", "left": "0", "right": "0", "bottom": "12px", "textAlign": "center", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "letterSpacing": "0.04em", "color": "#d4d4d4" }}>
              {T(V["lbHint"])}
            </div>
            {" "}
          </>) : null}
          {" "}
          {V["lbHasUrl"] ? (<>
            {" "}
            <div key={V["lbKey"]} style={{ "width": "100%", "height": "100%", "overflow": "hidden", "borderRadius": "8px", "pointerEvents": "auto", "touchAction": "none", "animation": "celebIn 320ms cubic-bezier(0.34,1.56,0.64,1) both" }} onWheel={V["onLbWheel"]}>
              {" "}
              <div key={V["lbKey"]} role="img" aria-label={V["lbNombre"]} onPointerDown={V["onLbDown"]} onPointerMove={V["onLbMove"]} onPointerUp={V["onLbUp"]} onPointerCancel={V["onLbUp"]} onDoubleClick={V["onLbDbl"]} style={{ "width": "100%", "height": "100%", "backgroundImage": "url(" + S(V["lbUrl"]) + ")", "backgroundSize": "contain", "backgroundRepeat": "no-repeat", "backgroundPosition": "center", "transform": S(V["lbTransform"]), "transformOrigin": "center", "transition": S(V["lbTrans"]), "cursor": S(V["lbCursor"]), "willChange": "transform" }}></div>
              {" "}
            </div>
            {" "}
          </>) : null}
          {" "}
          {V["lbNoUrl"] ? (<>
            {" "}
            <div key={V["lbKey"]} style={{ "width": "640px", "maxWidth": "100%", "aspectRatio": "16/10", "borderRadius": "12px", "border": "1px solid rgba(255,255,255,0.14)", "backgroundImage": "repeating-linear-gradient(45deg,#262626 0 10px,#1c1c1c 10px 20px)", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "8px", "pointerEvents": "auto", "animation": "celebIn 320ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
              {" "}
              <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#ffffff", "background": "#0a0a0a", "border": "1px solid rgba(255,255,255,0.28)", "borderRadius": "6px", "padding": "4px 8px" }}>
                {T(V["lbTipo"])}
              </span>
              {" "}
              <span style={{ "fontSize": "13px", "color": "#d4d4d4" }}>
                {"Archivo de ejemplo · sin imagen real en el prototipo"}
              </span>
              {" "}
            </div>
            {" "}
          </>) : null}
          {" "}
        </div>
        {" "}
        {V["lbMulti"] ? (<>
          {" "}
          <button onClick={V["onLbPrev"]} aria-label="Imagen anterior" title="Imagen anterior" style={{ "position": "absolute", "left": "20px", "top": "50%", "marginTop": "-20px", "background": "rgba(255,255,255,0.08)", "color": "#ffffff", "border": "1px solid rgba(255,255,255,0.28)", "borderRadius": "9999px", "width": "40px", "height": "40px", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp2j scp2h">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "transform": "scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          {" "}
          <button onClick={V["onLbNext"]} aria-label="Imagen siguiente" title="Imagen siguiente" style={{ "position": "absolute", "right": "20px", "top": "50%", "marginTop": "-20px", "background": "rgba(255,255,255,0.08)", "color": "#ffffff", "border": "1px solid rgba(255,255,255,0.28)", "borderRadius": "9999px", "width": "40px", "height": "40px", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp2j scp2h">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "transform": "scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
          {" "}
        </>) : null}
      </div>
    </>) : null}
    {V["momentClose"] ? (<>
      <div style={{ "position": "fixed", "inset": "0", "background": "rgba(10,10,10,0.4)", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "24px", "zIndex": "64", "animation": "overlayIn var(--duration-base) var(--ease-standard) both" }}>
        {" "}
        <div style={{ "width": "100%", "maxWidth": "440px", "background": "#ffffff", "borderRadius": "16px", "padding": "32px", "textAlign": "center", "animation": "celebIn 420ms cubic-bezier(0.34,1.56,0.64,1) both", "boxShadow": "rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px" }}>
          {" "}
          <div style={{ "position": "relative", "width": "96px", "height": "96px", "margin": "0 auto 20px" }}>
            {" "}
            <span aria-hidden="true" style={{ "position": "absolute", "inset": "0", "borderRadius": "9999px", "border": "1px solid #16a34a", "animation": "ringOut 900ms var(--ease-standard) 120ms both" }}></span>
            {" "}
            <span aria-hidden="true" style={{ "position": "absolute", "inset": "0", "borderRadius": "9999px", "border": "1px solid #16a34a", "animation": "ringOut 900ms var(--ease-standard) 320ms both" }}></span>
            {" "}
            <div style={{ "position": "absolute", "inset": "16px", "borderRadius": "9999px", "background": "#dcfce7", "display": "flex", "alignItems": "center", "justifyContent": "center", "animation": "badgePop 480ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
              {" "}
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="m4.5 12.5 5 5 10-10" strokeDasharray="26" style={{ "animation": "checkDraw 520ms var(--ease-standard) 240ms both" }}></path>
              </svg>
              {" "}
            </div>
            {" "}
            {L(V["sparks"]).map((_sp_56, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <span aria-hidden="true" style={{ "position": "absolute", "left": "50%", "top": "50%", "width": "0", "height": "0", "transform": "rotate(" + S(_sp_56?.["deg"]) + ")" }}>
                  {" "}
                  <span style={{ "display": "block", "position": "absolute", "left": "-3px", "top": "-3px", "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(_sp_56?.["color"]), "animation": "sparkOut 820ms var(--ease-standard) " + S(_sp_56?.["delay"]) + " both" }}></span>
                  {" "}
                </span>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
            {T(V["momentCode"])}{" CERRADO"}
          </div>
          {" "}
          <div style={{ "fontSize": "20px", "lineHeight": "1.4", "fontWeight": "600", "color": "#171717", "marginTop": "8px", "textWrap": "pretty" }}>
            {T(V["momentTitulo"])}
          </div>
          {" "}
          <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "marginTop": "6px", "textWrap": "pretty" }}>
            {T(V["momentSub"])}
          </div>
          {" "}
          <div style={{ "height": "3px", "borderRadius": "9999px", "background": "#f5f5f5", "marginTop": "20px", "overflow": "hidden" }}>
            <span style={{ "display": "block", "height": "100%", "background": "#0a0a0a", "animation": "progressBar 3200ms linear both" }}></span>
          </div>
          {" "}
          <div style={{ "display": "flex", "gap": "8px", "justifyContent": "center", "flexWrap": "wrap", "marginTop": "16px" }}>
            {" "}
            {V["momentHasUndo"] ? (<>
              {" "}
              <button onClick={V["onMomentUndo"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "10px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp2k scpd">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                  <path d="M9 14 4 9l5-5"></path>
                  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5 5.5 5.5 0 0 1-5.5 5.5H11"></path>
                </svg>
                {"Deshacer el cierre"}
              </button>
              {" "}
            </>) : null}
            {" "}
            <button onClick={V["onMomentGo"]} style={{ "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "10px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "8px", "boxShadow": "rgba(0,0,0,0.05) 0px 1px 2px 0px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1c scp2">
              {T(V["momentBtn"])}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            {" "}
          </div>
          {" "}
        </div>
      </div>
    </>) : null}
    {V["momentReopen"] ? (<>
      <div style={{ "position": "fixed", "inset": "0", "background": "rgba(10,10,10,0.4)", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "24px", "zIndex": "64", "animation": "overlayIn var(--duration-base) var(--ease-standard) both" }}>
        {" "}
        <div style={{ "width": "100%", "maxWidth": "440px", "background": "#ffffff", "borderRadius": "16px", "padding": "32px", "textAlign": "center", "animation": "celebIn 420ms cubic-bezier(0.34,1.56,0.64,1) both", "boxShadow": "rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px" }}>
          {" "}
          <div style={{ "position": "relative", "width": "96px", "height": "96px", "margin": "0 auto 20px" }}>
            {" "}
            <span aria-hidden="true" style={{ "position": "absolute", "inset": "0", "borderRadius": "9999px", "border": "1px solid #ea580c", "animation": "ringOut 900ms var(--ease-standard) 120ms both" }}></span>
            {" "}
            <span aria-hidden="true" style={{ "position": "absolute", "inset": "0", "borderRadius": "9999px", "border": "1px solid #ea580c", "animation": "ringOut 900ms var(--ease-standard) 320ms both" }}></span>
            {" "}
            <div style={{ "position": "absolute", "inset": "16px", "borderRadius": "9999px", "background": "#fef3c7", "display": "flex", "alignItems": "center", "justifyContent": "center", "animation": "badgePop 480ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
              {" "}
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "animation": "iconSpinTap 760ms var(--ease-standard) 200ms both" }}>
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
              {" "}
            </div>
            {" "}
            {L(V["sparks"]).map((_sp_57, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <span aria-hidden="true" style={{ "position": "absolute", "left": "50%", "top": "50%", "width": "0", "height": "0", "transform": "rotate(" + S(_sp_57?.["deg"]) + ")" }}>
                  {" "}
                  <span style={{ "display": "block", "position": "absolute", "left": "-3px", "top": "-3px", "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(_sp_57?.["color"]), "animation": "sparkOut 820ms var(--ease-standard) " + S(_sp_57?.["delay"]) + " both" }}></span>
                  {" "}
                </span>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
            {T(V["momentCode"])}{" REABIERTO"}
          </div>
          {" "}
          <div style={{ "fontSize": "20px", "lineHeight": "1.4", "fontWeight": "600", "color": "#171717", "marginTop": "8px", "textWrap": "pretty" }}>
            {T(V["momentTitulo"])}
          </div>
          {" "}
          <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "marginTop": "6px", "textWrap": "pretty" }}>
            {T(V["momentSub"])}
          </div>
          {" "}
          <div style={{ "height": "3px", "borderRadius": "9999px", "background": "#f5f5f5", "marginTop": "20px", "overflow": "hidden" }}>
            <span style={{ "display": "block", "height": "100%", "background": "#ea580c", "animation": "progressBar 2800ms linear both" }}></span>
          </div>
          {" "}
          <button onClick={V["onMomentGo"]} style={{ "marginTop": "16px", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "10px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpg scpd">
            {T(V["momentBtn"])}
          </button>
          {" "}
        </div>
      </div>
    </>) : null}
    {V["momentNudge"] ? (<>
      <div style={{ "position": "fixed", "inset": "0", "background": "rgba(10,10,10,0.4)", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "24px", "zIndex": "64", "animation": "overlayIn var(--duration-base) var(--ease-standard) both" }}>
        {" "}
        <div style={{ "width": "100%", "maxWidth": "400px", "background": "#ffffff", "borderRadius": "16px", "padding": "28px", "textAlign": "center", "animation": "celebIn 420ms cubic-bezier(0.34,1.56,0.64,1) both", "boxShadow": "rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px" }}>
          {" "}
          <div style={{ "position": "relative", "width": "84px", "height": "84px", "margin": "0 auto 18px" }}>
            {" "}
            <span aria-hidden="true" style={{ "position": "absolute", "inset": "0", "borderRadius": "9999px", "border": "1px solid #ea580c", "animation": "ringOut 900ms var(--ease-standard) 140ms both" }}></span>
            {" "}
            <div style={{ "position": "absolute", "inset": "14px", "borderRadius": "9999px", "background": "#fef3c7", "display": "flex", "alignItems": "center", "justifyContent": "center", "animation": "badgePop 480ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
              {" "}
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.04em" }}>
            {T(V["momentCode"])}{" MARCADO"}
          </div>
          {" "}
          <div style={{ "fontSize": "18px", "lineHeight": "1.4", "fontWeight": "600", "color": "#171717", "marginTop": "8px", "textWrap": "pretty" }}>
            {T(V["momentTitulo"])}
          </div>
          {" "}
          <div style={{ "fontSize": "14px", "lineHeight": "1.43", "color": "#737373", "marginTop": "6px", "textWrap": "pretty" }}>
            {T(V["momentSub"])}
          </div>
          {" "}
          <div style={{ "height": "3px", "borderRadius": "9999px", "background": "#f5f5f5", "marginTop": "20px", "overflow": "hidden" }}>
            <span style={{ "display": "block", "height": "100%", "background": "#ea580c", "animation": "progressBar 2800ms linear both" }}></span>
          </div>
          {" "}
          <button onClick={V["onMomentGo"]} style={{ "marginTop": "16px", "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "10px 16px", "fontSize": "14px", "fontWeight": "500", "cursor": "pointer", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpg scpd">
            {T(V["momentBtn"])}
          </button>
          {" "}
        </div>
      </div>
    </>) : null}
    {V["heavyOn"] ? (<>
      <div key="heavywait" role="status" aria-live="polite" style={{ "position": "fixed", "inset": "0", "zIndex": "80", "background": "rgba(255,255,255,0.86)", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "18px", "animation": "overlayIn var(--duration-base) var(--ease-standard) both" }}>
        {" "}
        <span style={{ "position": "relative", "height": "34px", "width": "104px", "display": "block" }}>
          {" "}
          <img src="/marca/legumex-isotipo.png" alt="" style={{ "position": "absolute", "inset": "0", "height": "34px", "width": "104px", "objectFit": "contain", "filter": "grayscale(1)", "opacity": "0.25" }} />
          {" "}
          <img src="/marca/legumex-isotipo.png" ref={V["heavyLogoRef"]} alt="" style={{ "position": "absolute", "inset": "0", "height": "34px", "width": "104px", "objectFit": "contain" }} />
          {" "}
        </span>
        {" "}
        <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "letterSpacing": "0.08em", "textTransform": "uppercase" }}>
          {T(V["heavyMsg"])}
        </div>
        {" "}
        <div style={{ "width": "132px", "height": "2px", "borderRadius": "9999px", "background": "#e5e5e5", "overflow": "hidden" }}>
          <span style={{ "display": "block", "height": "100%", "background": "#14402c", "animation": "progressBar 900ms linear both" }}></span>
        </div>
      </div>
    </>) : null}
    {V["saving"] ? (<>
      <div key="savepill" role="status" aria-live="polite" style={{ "position": "fixed", "right": "24px", "top": "24px", "zIndex": "70", "display": "inline-flex", "alignItems": "center", "gap": "8px", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "9999px", "padding": "8px 16px", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "whiteSpace": "nowrap", "boxShadow": "rgba(0,0,0,0.08) 0px 4px 12px -2px" }}>
        {" "}
        <span style={{ "position": "relative", "height": "16px", "width": "48px", "flexShrink": "0", "display": "block" }}>
          {" "}
          <img src="/marca/legumex-isotipo.png" alt="" style={{ "position": "absolute", "inset": "0", "height": "16px", "width": "48px", "objectFit": "contain", "filter": "grayscale(1)", "opacity": "0.3" }} />
          {" "}
          <img src="/marca/legumex-isotipo.png" ref={V["saveLogoRef"]} alt="" style={{ "position": "absolute", "inset": "0", "height": "16px", "width": "48px", "objectFit": "contain" }} />
          {" "}
        </span>
        {"GUARDANDO "}
      </div>
    </>) : null}
    {V["hasToast"] ? (<>
      <div key="toast" role="status" aria-live="polite" style={{ "position": "fixed", "right": "24px", "top": "24px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "background": "#0a0a0a", "color": "#ffffff", "borderRadius": "9999px", "padding": "10px 20px", "fontSize": "14px", "fontWeight": "500", "zIndex": "72", "animation": S(V["toastAnim"]) + " both", "boxShadow": "rgba(0,0,0,0.1) 0px 10px 15px -3px" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "animation": "iconPop 420ms var(--ease-standard) both" }}>
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
        {T(V["toast"])}
        {V["hasUndo"] ? (<>
          <button onClick={V["onUndo"]} style={{ "marginLeft": "4px", "background": "transparent", "color": "#ffffff", "border": "1px solid rgba(255,255,255,0.35)", "borderRadius": "9999px", "padding": "3px 10px", "fontSize": "12px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "5px", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scp2l scp2m">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#ffffff)" }}>
              <path d="M9 14 4 9l5-5"></path>
              <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5 5.5 5.5 0 0 1-5.5 5.5H11"></path>
            </svg>
            {"Deshacer"}
          </button>
        </>) : null}
      </div>
    </>) : null}
    {V["booting"] ? (<>
      <div aria-hidden="true" style={{ "position": "fixed", "inset": "0", "zIndex": "90", "background": "#ffffff", "display": "flex", "alignItems": "center", "justifyContent": "center", "animation": S(V["bootAnim"]) }}>
        {" "}
        <div style={{ "position": "relative", "width": "200px", "animation": "popIn var(--duration-page) var(--ease-standard) both" }}>
          {" "}
          <img src="/marca/legumex-logo.png" alt="" style={{ "width": "100%", "display": "block", "filter": "grayscale(1)", "opacity": "0.22" }} />
          {" "}
          <img src="/marca/legumex-logo.png" alt="" style={{ "position": "absolute", "inset": "0", "width": "100%", "display": "block", "animation": "logoFill 1100ms var(--ease-standard) both" }} />
          {" "}
        </div>
      </div>
    </>) : null}
    {V["chatFabOn"] ? (<>
      <button data-no-print="" onClick={V["onOpenChat"]} aria-label="Abrir conversaciones" title="Conversaciones de tickets" style={{ "position": "fixed", "right": "24px", "bottom": "24px", "zIndex": "55", "width": S(V["fabSize"]), "height": S(V["fabSize"]), "transition": "width var(--duration-base) var(--ease-standard),height var(--duration-base) var(--ease-standard)", "background": "#0a0a0a", "color": "#ffffff", "border": "none", "borderRadius": "9999px", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "boxShadow": "rgba(0,0,0,0.18) 0px 10px 24px -6px", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1c scp8">
        {" "}
        <svg width={V["fabIcon"]} height={V["fabIcon"]} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)" }}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        {" "}
        {V["hasChatWaiting"] ? (<>
          {" "}
          <span style={{ "position": "absolute", "top": "-2px", "right": "-2px", "display": "flex", "alignItems": "center", "justifyContent": "center", "minWidth": "20px", "height": "20px", "padding": "0 5px", "borderRadius": "9999px", "background": "#ffffff", "color": "#0a0a0a", "border": "2px solid #0a0a0a", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px" }}>
            {T(V["chatWaiting"])}
          </span>
          {" "}
        </>) : null}
      </button>
    </>) : null}
    {V["chatOpen"] ? (<>
      <div data-no-print="" role="dialog" aria-label="Conversaciones de tickets" style={{ "position": "fixed", "right": "24px", "bottom": "24px", "zIndex": "60", "width": "390px", "maxWidth": "calc(100vw - 32px)", "height": "600px", "maxHeight": "calc(100vh - 48px)", "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "16px", "boxShadow": "rgba(0,0,0,0.18) 0px 20px 40px -12px", "display": "flex", "flexDirection": "column", "overflow": "hidden", "animation": "dockIn var(--duration-base) var(--ease-standard) both" }}>
        {" "}
        <div style={{ "display": "flex", "alignItems": "center", "gap": "10px", "padding": "12px 14px", "borderBottom": "1px solid #e5e5e5", "flexShrink": "0" }}>
          {" "}
          {V["chatConvPane"] ? (<>
            {" "}
            <button onClick={V["onChatBack"]} aria-label="Volver a la lista" title="Volver a todas las conversaciones" style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scpm scpt">
              <svg style={{ "transform": "var(--im,translateX(0)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>
            {" "}
            <div style={{ "minWidth": "0", "flex": "1" }}>
              {" "}
              <div style={{ "display": "flex", "alignItems": "center", "gap": "6px", "whiteSpace": "nowrap", "overflow": "hidden", "minWidth": "0" }}>
                {" "}
                <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "flexShrink": "0" }}>
                  {T(V["chatCode"])}
                </span>
                {" "}
                <span style={{ "width": "6px", "height": "6px", "borderRadius": "9999px", "background": S(V["chatStatusDot"]), "flexShrink": "0" }}></span>
                {" "}
                <span style={{ "fontSize": "11px", "color": "#737373", "minWidth": "0", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                  {T(V["chatStatusLabel"])}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{ "fontSize": "14px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                {T(V["chatTitulo"])}
              </div>
              {" "}
            </div>
            {" "}
            {V["chatCallOn"] ? (<>
              {" "}
              <a href={V["chatCallUrl"]} onClick={V["onChatCall"]} target="_blank" rel="noreferrer" aria-label={V["chatCallLabel"]} title={V["chatCallLabel"]} style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)" }} className="scp24 scp25">
                <svg style={{ "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
              </a>
              {" "}
            </>) : null}
            {" "}
            {V["chatCanEdit"] ? (<>
              {" "}
              <button onClick={V["onChatEdit"]} aria-label="Editar este ticket" title="Editar título, categoría o prioridad" style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scp1i scpt">
                <svg style={{ "transform": "var(--im,rotate(0deg) scale(1)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                </svg>
              </button>
              {" "}
            </>) : null}
            {" "}
            {V["chatNudgeShow"] ? (<>
              {" "}
              <button onClick={V["onChatNudge"]} disabled={V["chatNudgeDis"]} aria-label={V["chatNudgeLabel"]} title={V["chatNudgeLabel"]} style={{ "opacity": S(V["chatNudgeOp"]), "cursor": S(V["chatNudgeCur"]), "background": "#fef3c7", "border": "1px solid #ea580c", "borderRadius": "8px", "padding": "6px", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0", "transition": "transform var(--duration-fast) var(--ease-standard)" }} className="scp8">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </button>
              {" "}
            </>) : null}
            {" "}
            {V["chatResolvedShow"] ? (<>
              {" "}
              <button onClick={V["onChatResolved"]} disabled={V["chatResolvedDis"]} aria-label={V["chatResolvedLabel"]} title={V["chatResolvedLabel"]} style={{ "opacity": S(V["chatResolvedOp"]), "cursor": S(V["chatResolvedCur"]), "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpg scp8">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </button>
              {" "}
            </>) : null}
            {" "}
            {V["chatCanReopen"] ? (<>
              {" "}
              <button onClick={V["onChatReopen"]} aria-label="Reabrir este ticket" title="Vuelve a estado Abierto para poder responder" style={{ "background": "#fef3c7", "border": "1px solid #ea580c", "borderRadius": "8px", "padding": "6px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scp26 scp27">
                <svg style={{ "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard)", "stroke": "var(--is,#ea580c)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path>
                </svg>
              </button>
              {" "}
            </>) : null}
            {" "}
          </>) : null}
          {" "}
          {V["chatListPane"] ? (<>
            {" "}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            {" "}
            <div style={{ "minWidth": "0", "flex": "1" }}>
              {" "}
              <div style={{ "fontSize": "14px", "fontWeight": "600", "color": "#171717" }}>
                {"Conversaciones"}
              </div>
              {" "}
              <div style={{ "fontSize": "11px", "color": "#737373" }}>
                {T(V["chatSub"])}
              </div>
              {" "}
            </div>
            {" "}
          </>) : null}
          {" "}
          <button onClick={V["onChatExpand"]} aria-label="Abrir en la sección Chat" title="Abrir en pantalla completa" style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scpq scp19">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard)" }}>
              <path d="M15 3h6v6"></path>
              <path d="m21 3-7 7"></path>
              <path d="m3 21 7-7"></path>
              <path d="M9 21H3v-6"></path>
            </svg>
          </button>
          {" "}
          <button onClick={V["onCloseChat"]} aria-label="Cerrar conversaciones" title="Cerrar" style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "6px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scpx scpt">
            <svg style={{ "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
          {" "}
        </div>
        {" "}
        {V["chatListPane"] ? (<>
          {" "}
          <div style={{ "padding": "10px 14px", "borderBottom": "1px solid #e5e5e5", "display": "flex", "flexDirection": "column", "gap": "8px", "flexShrink": "0" }}>
            {" "}
            <div style={{ "position": "relative" }}>
              {" "}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "position": "absolute", "left": "10px", "top": "50%", "transform": "translateY(-50%)", "pointerEvents": "none" }}>
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              {" "}
              <input value={(V["chatQ"] ?? "")} onChange={V["onChatQ"]} placeholder="Buscar por título o código" style={{ "width": "100%", "background": "#ffffff", "color": "#111827", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "7px 10px 7px 32px", "fontSize": "13px", "outline": "none" }} />
              {" "}
            </div>
            {" "}
            {V["vistaAdmin"] ? (<>
              {" "}
              <div role="group" aria-label="Qué tickets contar" style={{ "display": "flex", "gap": "2px", "padding": "3px", "background": "rgba(10,10,10,0.05)", "borderRadius": "8px" }}>
                {" "}
                {L(V["chatScopeOpts"]).map((_o_58, $index) => (
                  <React.Fragment key={$index}>
                    {" "}
                    <button onClick={_o_58?.["go"]} aria-pressed={_o_58?.["pressed"]} style={{ "flex": "1", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "gap": "6px", "height": "30px", "padding": "0 8px", "border": "none", "borderRadius": "6px", "background": S(_o_58?.["bg"]), "boxShadow": S(_o_58?.["shadow"]), "fontSize": "12px", "fontWeight": S(_o_58?.["weight"]), "color": "#171717", "cursor": "pointer", "whiteSpace": "nowrap", "transition": "background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)" }} className="scpb">
                      {T(_o_58?.["label"])}
                      <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252" }}>
                        {T(_o_58?.["count"])}
                      </span>
                    </button>
                    {" "}
                  </React.Fragment>
                ))}
                {" "}
              </div>
              {" "}
            </>) : null}
            {" "}
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "4px", "background": "#f5f5f5", "borderRadius": "8px", "padding": "3px" }}>
              {" "}
              {L(V["chatFilters"]).map((_f_59, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <button onClick={_f_59?.["go"]} style={{ "flex": "1 1 auto", "border": "none", "background": S(_f_59?.["bg"]), "color": "#171717", "fontSize": "12px", "fontWeight": "500", "padding": "5px 6px", "borderRadius": "6px", "cursor": "pointer", "whiteSpace": "nowrap", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scp23">
                    {T(_f_59?.["label"])}
                  </button>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ "flex": "1", "minHeight": "0", "overflowY": "auto", "padding": "6px" }}>
            {" "}
            {L(V["chatList"]).map((_c_60, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <button onClick={_c_60?.["go"]} style={{ "display": "flex", "gap": "10px", "width": "100%", "textAlign": "left", "background": S(_c_60?.["bg"]), "border": "none", "borderRadius": "10px", "padding": "10px", "cursor": "pointer", "transition": "background-color var(--duration-fast) var(--ease-standard)" }} className="scpg scpt">
                  {" "}
                  {_c_60?.["hasBlob"] ? (<>
                    {" "}
                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" ref={_c_60?.["blobRef"]} alt="" style={{ "width": "30px", "height": "30px", "borderRadius": "9999px", "background": "#f5f5f5", "border": "1px solid " + S(_c_60?.["ring"]), "flexShrink": "0", "display": "block" }} />
                    {" "}
                  </>) : null}
                  {" "}
                  {_c_60?.["noBlob"] ? (<>
                    {" "}
                    <span style={{ "width": "30px", "height": "30px", "borderRadius": "9999px", "background": "#f5f5f5", "border": "1px solid " + S(_c_60?.["ring"]), "color": "#171717", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "11px", "fontWeight": "600", "flexShrink": "0" }}>
                      {T(_c_60?.["ini"])}
                    </span>
                    {" "}
                  </>) : null}
                  {" "}
                  <span style={{ "minWidth": "0", "flex": "1", "display": "flex", "flexDirection": "column", "gap": "2px" }}>
                    {" "}
                    <span style={{ "display": "flex", "alignItems": "center", "gap": "6px" }}>
                      {" "}
                      <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373" }}>
                        {T(_c_60?.["code"])}
                      </span>
                      {" "}
                      <span style={{ "width": "5px", "height": "5px", "borderRadius": "9999px", "background": S(_c_60?.["dot"]), "flexShrink": "0" }}></span>
                      {" "}
                      <span style={{ "marginLeft": "auto", "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "flexShrink": "0" }}>
                        {T(_c_60?.["when"])}
                      </span>
                      {" "}
                    </span>
                    {" "}
                    <span style={{ "fontSize": "13px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                      {T(_c_60?.["titulo"])}
                    </span>
                    {" "}
                    <span style={{ "fontSize": "12px", "color": S(_c_60?.["lastInk"]), "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                      {T(_c_60?.["last"])}
                    </span>
                    {" "}
                    {_c_60?.["waiting"] ? (<>
                      {" "}
                      <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "5px", "fontSize": "11px", "fontWeight": "500", "color": "#171717", "background": S(_c_60?.["waitBg"]), "borderRadius": "9999px", "padding": "2px 8px", "alignSelf": "flex-start", "marginTop": "2px" }}>
                        {" "}
                        <span style={{ "width": "5px", "height": "5px", "borderRadius": "9999px", "background": S(_c_60?.["waitDot"]), "flexShrink": "0" }}></span>
                        {T(_c_60?.["waitLabel"])}{" "}
                      </span>
                      {" "}
                    </>) : null}
                    {" "}
                  </span>
                  {" "}
                </button>
                {" "}
              </React.Fragment>
            ))}
            {" "}
            {V["chatEmpty"] ? (<>
              {" "}
              <div style={{ "padding": "40px 20px", "textAlign": "center" }}>
                {" "}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "margin": "0 auto 8px", "display": "block" }}>
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                {" "}
                <div style={{ "fontSize": "13px", "color": "#525252" }}>
                  {"Ningún ticket coincide con lo que buscás."}
                </div>
                {" "}
              </div>
              {" "}
            </>) : null}
            {" "}
          </div>
          {" "}
        </>) : null}
        {" "}
        {V["chatConvPane"] ? (<>
          {" "}
          <div ref={V["chatRef"]} style={{ "flex": "1", "minHeight": "0", "overflowY": "auto", "padding": "14px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "#fafafa" }}>
            {" "}
            <div style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "12px", "padding": "10px 12px" }}>
              {" "}
              <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#737373", "letterSpacing": "0.04em", "marginBottom": "4px" }}>
                {"REPORTÓ "}{T(V["chatAutor"])}
              </div>
              {" "}
              <div style={{ "fontSize": "13px", "lineHeight": "1.5", "color": "#262626", "textWrap": "pretty" }}>
                {T(V["chatDesc"])}
              </div>
              {" "}
            </div>
            {" "}
            {L(V["chatMsgs"]).map((_m_61, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div style={{ "display": "flex", "gap": "8px", "justifyContent": S(_m_61?.["just"]), "animation": "bubbleIn var(--duration-base) var(--ease-standard) both" }}>
                  {" "}
                  {_m_61?.["theirs"] ? (<>
                    {" "}
                    {_m_61?.["hasBlob"] ? (<>
                      {" "}
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" ref={_m_61?.["blobRef"]} alt="" style={{ "width": "26px", "height": "26px", "borderRadius": "9999px", "background": "#f5f5f5", "border": "1px solid " + S(_m_61?.["ring"]), "flexShrink": "0", "marginTop": "auto", "display": "block" }} />
                      {" "}
                    </>) : null}
                    {" "}
                    {_m_61?.["noBlob"] ? (<>
                      {" "}
                      <span style={{ "width": "26px", "height": "26px", "borderRadius": "9999px", "background": "#f5f5f5", "border": "1px solid " + S(_m_61?.["ring"]), "color": "#171717", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "10px", "fontWeight": "600", "flexShrink": "0", "marginTop": "auto" }}>
                        {T(_m_61?.["ini"])}
                      </span>
                      {" "}
                    </>) : null}
                    {" "}
                  </>) : null}
                  {" "}
                  <span style={{ "maxWidth": "78%", "display": "flex", "flexDirection": "column", "gap": "3px", "alignItems": S(_m_61?.["align"]) }}>
                    {" "}
                    <span style={{ "fontSize": "11px", "color": "#737373" }}>
                      {T(_m_61?.["head"])}
                    </span>
                    {" "}
                    {_m_61?.["isText"] ? (<>
                      <span style={{ "background": S(_m_61?.["bg"]), "color": S(_m_61?.["ink"]), "border": S(_m_61?.["border"]), "borderRadius": "14px", "padding": "9px 12px", "fontSize": "13px", "lineHeight": "1.5", "textWrap": "pretty" }}>
                        {T(_m_61?.["texto"])}
                      </span>
                    </>) : null}
                    {" "}
                    {_m_61?.["isFile"] ? (<>
                      {" "}
                      <button onClick={_m_61?.["open"]} aria-label="Ver imagen en grande" title="Ver en grande" style={{ "padding": "0", "border": "1px solid #e5e5e5", "borderRadius": "14px", "overflow": "hidden", "background": "#ffffff", "cursor": "zoom-in", "display": "flex", "flexDirection": "column", "width": "240px", "maxWidth": "100%", "textAlign": "left", "fontFamily": "inherit", "transition": "transform var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp29 scph">
                        {" "}
                        {_m_61?.["fileHasUrl"] ? (<>
                          <img src={_m_61?.["fileUrl"]} alt={_m_61?.["fileName"]} style={{ "display": "block", "width": "100%", "height": "160px", "objectFit": "cover", "background": "#f5f5f5" }} />
                        </>) : null}
                        {" "}
                        {_m_61?.["fileNoUrl"] ? (<>
                          <span style={{ "height": "120px", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "repeating-linear-gradient(135deg,#f5f5f5 0 8px,#efefef 8px 16px)" }}>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "transform": "scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                              <circle cx="9" cy="9" r="2"></circle>
                              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                            </svg>
                          </span>
                        </>) : null}
                        {" "}
                        <span style={{ "padding": "8px 10px", "display": "flex", "alignItems": "center", "gap": "8px", "minWidth": "0" }}>
                          {" "}
                          <span style={{ "minWidth": "0", "flex": "1", "display": "flex", "flexDirection": "column", "gap": "2px" }}>
                            {" "}
                            <span style={{ "fontSize": "12px", "fontWeight": "500", "color": "#171717", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                              {T(_m_61?.["fileName"])}
                            </span>
                            {" "}
                            <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>
                              {T(_m_61?.["fileMeta"])}
                            </span>
                            {" "}
                          </span>
                          {" "}
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                            <path d="M15 3h6v6"></path>
                            <path d="M9 21H3v-6"></path>
                            <path d="M21 3l-7 7"></path>
                            <path d="M3 21l7-7"></path>
                          </svg>
                          {" "}
                        </span>
                        {" "}
                      </button>
                      {" "}
                    </>) : null}
                    {" "}
                  </span>
                  {" "}
                </div>
                {" "}
              </React.Fragment>
            ))}
            {" "}
            {V["chatNoMsgs"] ? (<>
              {" "}
              <div style={{ "textAlign": "center", "padding": "16px 8px", "fontSize": "12px", "color": "#737373" }}>
                {"Todavía nadie respondió. Lo que escribas acá se publica como comentario del ticket."}
              </div>
              {" "}
            </>) : null}
            {" "}
          </div>
          {" "}
          <div style={{ "borderTop": "1px solid #e5e5e5", "padding": "10px 12px", "display": "flex", "flexDirection": "column", "gap": "8px", "flexShrink": "0" }}>
            {" "}
            {V["chatReplyLocked"] ? (<>
              {" "}
              <div role="note" style={{ "display": "flex", "gap": "10px", "alignItems": "center", "background": "#f5f5f5", "borderRadius": "10px", "padding": "10px 12px" }}>
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                {" "}
                <span style={{ "minWidth": "0", "flex": "1", "fontSize": "13px", "lineHeight": "1.45", "color": "#262626", "textWrap": "pretty" }}>
                  {T(V["chatReplyLockMsg"])}
                </span>
                {" "}
                {V["chatReplyLockTake"] ? (<>
                  {" "}
                  <button onClick={V["chatReplyOnTake"]} style={{ "flexShrink": "0", "background": "#000000", "color": "#ffffff", "border": "none", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "13px", "fontWeight": "500", "cursor": "pointer", "whiteSpace": "nowrap", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1n scp6">
                    {T(V["chatReplyTakeLabel"])}
                  </button>
                  {" "}
                </>) : null}
                {" "}
              </div>
              {" "}
            </>) : null}
            {" "}
            {V["chatCanReply"] ? (<>
              {" "}
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "6px" }}>
                {" "}
                {L(V["chatMacros"]).map((_m_62, $index) => (
                  <React.Fragment key={$index}>
                    {" "}
                    <button onClick={_m_62?.["use"]} title={_m_62?.["text"]} style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "9999px", "padding": "4px 10px", "fontSize": "12px", "color": "#404040", "cursor": "pointer", "whiteSpace": "nowrap", "flexShrink": "0", "transition": "background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp2c scpt">
                      {T(_m_62?.["label"])}
                    </button>
                    {" "}
                  </React.Fragment>
                ))}
                {" "}
              </div>
              {" "}
              {V["chatHasStaged"] ? (<>
                {" "}
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "animation": "dropIn var(--duration-base) var(--ease-standard) both" }}>
                  {" "}
                  <div style={{ "display": "flex", "gap": "8px", "flexWrap": "wrap" }}>
                    {" "}
                    {L(V["chatStaged"]).map((_p_63, $index) => (
                      <React.Fragment key={$index}>
                        {" "}
                        <span style={{ "position": "relative", "width": "64px", "height": "64px", "flexShrink": "0", "animation": "badgePop 320ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
                          {" "}
                          <button onClick={_p_63?.["open"]} aria-label="Ver antes de enviar" title={_p_63?.["nombre"]} style={{ "width": "100%", "height": "100%", "padding": "0", "border": "1px solid #e5e5e5", "borderRadius": "10px", "overflow": "hidden", "background": "#f5f5f5", "cursor": "zoom-in", "display": "block" }}>
                            <img src={_p_63?.["url"]} alt={_p_63?.["nombre"]} style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block" }} />
                          </button>
                          {" "}
                          <button onClick={_p_63?.["remove"]} aria-label="Quitar imagen" title="Quitar" style={{ "position": "absolute", "top": "-6px", "right": "-6px", "width": "22px", "height": "22px", "borderRadius": "9999px", "border": "2px solid #ffffff", "background": "#171717", "color": "#ffffff", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "padding": "0", "transition": "transform var(--duration-fast) var(--ease-standard)" }} className="scp2a scp2b">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </button>
                          {" "}
                        </span>
                        {" "}
                      </React.Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                  <div style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "11px", "color": "#525252" }}>
                    {T(V["chatStagedNote"])}
                  </div>
                  {" "}
                </div>
                {" "}
              </>) : null}
              {" "}
              {V["chatUploading"] ? (<>
                {" "}
                <div role="status" aria-live="polite" aria-label={V["chatUpNote"]} style={{ "display": "flex", "gap": "8px", "flexWrap": "wrap" }}>
                  {" "}
                  {L(V["chatUpTiles"]).map((_u_64, $index) => (
                    <React.Fragment key={$index}>
                      {" "}
                      <span title={_u_64?.["nombre"]} style={{ "position": "relative", "width": "64px", "height": "64px", "flexShrink": "0", "borderRadius": "10px", "background": "#0a0a0a", "overflow": "hidden", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "6px", "animation": "badgePop 320ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
                        {" "}
                        <span aria-hidden="true" style={{ "position": "relative", "display": "inline-block", "height": "12px", "flexShrink": "0" }}>
                          <img src="/marca/legumex-isotipo.png" alt="" style={{ "height": "12px", "width": "auto", "display": "block", "opacity": "0.28", "filter": "brightness(0) invert(1)" }} />
                          <img src="/marca/legumex-isotipo.png" alt="" style={{ "position": "absolute", "left": "0", "top": "0", "height": "12px", "width": "auto", "display": "block", "clipPath": "inset(0 " + S(_u_64?.["rest"]) + " 0 0)", "transition": "clip-path 240ms linear", "filter": "brightness(0) invert(1)" }} />
                        </span>
                        {" "}
                        <span style={{ "fontFamily": "'JetBrains Mono',monospace", "fontSize": "10px", "color": "#ffffff", "letterSpacing": "0.04em" }}>
                          {T(_u_64?.["pctLabel"])}
                        </span>
                        {" "}
                      </span>
                      {" "}
                    </React.Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
              </>) : null}
              {" "}
              <div style={{ "display": "flex", "gap": "8px", "alignItems": "flex-end" }}>
                {" "}
                <label aria-label="Adjuntar imagen" title="Adjuntar imagen · JPG, PNG o WEBP hasta 5 MB" style={{ "background": "#ffffff", "border": "1px solid #e5e5e5", "borderRadius": "10px", "padding": "10px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scp2d scp8">
                  <input type="file" accept="image/jpeg,image/png,image/webp" multiple="" onChange={V["onChatPick"]} style={{ "position": "absolute", "width": "1px", "height": "1px", "opacity": "0", "pointerEvents": "none" }} />
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "transform": "var(--im,rotate(0deg)) scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                  </svg>
                </label>
                {" "}
                <textarea value={(V["chatMsg"] ?? "")} onChange={V["onChatMsg"]} onKeyDown={V["onChatKey"]} rows="2" placeholder="Escribí tu respuesta — Enter envía, Shift+Enter salta línea" style={{ "flex": "1", "minWidth": "0", "background": "#ffffff", "color": "#111827", "border": "1px solid #e5e5e5", "borderRadius": "10px", "padding": "9px 11px", "fontSize": "13px", "lineHeight": "1.5", "fontFamily": "inherit", "resize": "none", "outline": "none" }}></textarea>
                {" "}
                <button onClick={V["onChatSend"]} aria-label="Enviar respuesta" title="Enviar respuesta" style={{ "background": "#0a0a0a", "color": "#ffffff", "border": "none", "borderRadius": "10px", "padding": "10px", "cursor": "pointer", "display": "flex", "alignItems": "center", "flexShrink": "0", "transition": "transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)" }} className="scp1c scp8">
                  {V["chatIdle"] ? (<>
                    <svg style={{ "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)" }} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  </>) : null}
                  {V["chatSending"] ? (<>
                    <span style={{ "width": "16px", "height": "16px", "display": "flex", "alignItems": "center", "justifyContent": "center", "overflow": "visible" }}>
                      <span aria-hidden="true" style={{ "position": "relative", "display": "inline-block", "height": "6px", "flexShrink": "0" }}>
                        <img src="/marca/legumex-isotipo.png" alt="" style={{ "height": "6px", "width": "auto", "display": "block", "opacity": "0.28", "filter": "brightness(0) invert(1)" }} />
                        <img src="/marca/legumex-isotipo.png" alt="" style={{ "position": "absolute", "left": "0", "top": "0", "height": "6px", "width": "auto", "display": "block", "animation": "logoLoop 1100ms cubic-bezier(0.65,0,0.35,1) infinite", "filter": "brightness(0) invert(1)" }} />
                      </span>
                    </span>
                  </>) : null}
                </button>
                {" "}
              </div>
              {" "}
              {V["chatHasErr"] ? (<>
                {" "}
                <div role="alert" style={{ "display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "12px", "lineHeight": "1.4", "color": "#171717" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                  {T(V["chatErr"])}
                </div>
                {" "}
              </>) : null}
              {" "}
              {V["chatCanClose"] ? (<>
                {" "}
                <button onClick={V["onChatSendClose"]} style={{ "background": "#ffffff", "color": "#171717", "border": "1px solid #e5e5e5", "borderRadius": "8px", "padding": "7px 10px", "fontSize": "12px", "fontWeight": "500", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "gap": "6px", "transition": "background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)" }} className="scpi scpt">
                  {" "}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0", "transform": "scale(var(--ic,1))", "transformOrigin": "center", "transition": "transform var(--duration-base) var(--ease-standard),stroke var(--duration-fast) var(--ease-standard)", "stroke": "var(--is,#525252)" }}>
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  {"Responder y cerrar el ticket "}
                </button>
                {" "}
              </>) : null}
              {" "}
            </>) : null}
            {" "}
          </div>
          {" "}
        </>) : null}
      </div>
    </>) : null}
    </>
  );
}
