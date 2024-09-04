import Script from 'next/script';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Service Assistant Homepage</h1>
      
      {/* Other content of your homepage */}

      {/* Voiceflow Chatbot Script */}
      <Script
        id="voiceflow-chatbot"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, t) {
              const v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                window.voiceflow.chat.load({
                  verify: { projectID: '66d8382f07acb23f59ab11c6' }, // Replace with your actual project ID
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production'
                });
              };
              v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
              v.type = "text/javascript";
              s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `,
        }}
      />
    </div>
  );
}
