import re

with open("legacy/universe.html", "r") as f:
    content = f.read()

# Extract styles
style_start = content.find("<style>")
style_end = content.find("</style>", style_start)
css_content = content[style_start+7:style_end]

# Extract body
body_start = content.find("<body>") + 6
body_end = content.find("</body>")
body = content[body_start:body_end]

# Remove script tags from body
body = re.sub(r'<script.*?>.*?</script>', '', body, flags=re.DOTALL)
# Keep only elements, remove tailwind config script and EmailJS script
body = re.sub(r'<!-- Setup Tailwind Colors -->.*?<!--', '<!--', body, flags=re.DOTALL)


# Convert HTML to JSX
jsx = body.replace('class="', 'className="')
jsx = jsx.replace('stroke-linecap', 'strokeLinecap')
jsx = jsx.replace('stroke-linejoin', 'strokeLinejoin')
jsx = jsx.replace('stroke-width', 'strokeWidth')
jsx = jsx.replace('clip-rule', 'clipRule')
jsx = jsx.replace('for="', 'htmlFor="')
jsx = jsx.replace('style="animation-duration: 3s;"', 'style={{ animationDuration: "3s" }}')
jsx = jsx.replace('style="animation-direction: reverse; animation-duration: 2s;"', 'style={{ animationDirection: "reverse", animationDuration: "2s" }}')
jsx = jsx.replace('<!--', '{/*')
jsx = jsx.replace('-->', '*/}')
jsx = re.sub(r'<img(.*?)(?<!/)>', r'<img\1/>', jsx) # close img tags
jsx = re.sub(r'<br>', r'<br />', jsx)
jsx = re.sub(r'<hr(.*?)>', r'<hr\1 />', jsx)

# Remove the outer </div> <!-- Closing main page wrapper --> since there's no opening wrapper in body
jsx = jsx.replace('</div> {/* Closing main page wrapper */}', '')

page_tsx = f"""import React from "react";
import Script from "next/script";

export default function UniversePage() {{
  return (
    <>
      <style dangerouslySetInnerHTML={{{{ __html: `{css_content}` }}}} />
      <style dangerouslySetInnerHTML={{{{ __html: `
        /* GLOBAL FONT OVERRIDES */
        body {{ font-family: "Times New Roman", serif !important; }}
        h1, h2, h3 {{ font-family: Georgia, serif !important; }}
        .code, .tech-stack {{ font-family: "Courier New", monospace !important; }}
      ` }}}} />
      <div className="bg-[#05080f] text-[#e2e8f0] h-screen w-screen overflow-hidden m-0">
        {jsx}
      </div>

      {{/* Scripts */}}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/renderers/CSS2DRenderer.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/EffectComposer.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/RenderPass.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/ShaderPass.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/shaders/CopyShader.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/shaders/LuminosityHighPassShader.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/UnrealBloomPass.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" strategy="afterInteractive" />
      <Script src="/js/portfolio-engine.js" strategy="lazyOnload" />
      <Script src="/js/universe-engine.js" strategy="lazyOnload" />
    </>
  );
}}
"""

with open("src/app/universe/page.tsx", "w") as f:
    f.write(page_tsx)
