import React from 'react';
import { Scale, Zap, ShieldCheck, ArrowRightLeft, Construction, Image as ImageIcon } from 'lucide-react';

export const AnalysisPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-12 max-w-5xl mx-auto">
      
      {/* Title Section */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          En quoi la dynamique de développement influe-t-elle sur le paysage ?
        </h1>
        <p className="text-lg text-slate-600">
          Analyse critique : Expansion fulgurante (Dubaï) vs Stabilité historique (Zurich)
        </p>
      </div>

      {/* Main Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Dubaï Card */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-blue-500 relative flex flex-col">
          <div className="absolute top-4 right-4 opacity-10">
            <Zap size={60} />
          </div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900">
            <Zap className="text-blue-500" /> Dubaï : L'Urgence du Futur
          </h2>

          {/* VISUAL ANALYSIS SLOT DUBAI */}
          <div className="mb-6 h-48 bg-slate-50 rounded-xl border-2 border-dashed border-blue-200 relative flex items-center justify-center p-4 text-center group">
             {/* COMMENTAIRE: Insérer ici image Skyline Dubaï / Burj Khalifa du PDF */}
             <img 
               src="" 
               alt="Skyline de Dubaï dominée par le Burj Khalifa et les gratte-ciels le long de Sheikh Zayed Road, illustrant la verticalité extrême" 
               className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" 
             />
             <div>
                <ImageIcon className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <span className="text-xs font-mono text-blue-400 bg-blue-50 px-2 py-1 rounded">IMAGE PDF : Skyline / Burj Khalifa</span>
                <p className="text-xs text-slate-400 mt-2 italic">"Verticalité & Gigantisme"</p>
             </div>
          </div>

          <ul className="space-y-4 text-slate-600 flex-1">
            <li className="flex gap-3">
              <Construction className="shrink-0 mt-1 text-blue-500 w-5 h-5" />
              <span>
                <strong>Objet Isolé :</strong> Le paysage est une collection d'icônes architecturales sans tissu urbain historique liant.
              </span>
            </li>
            <li className="flex gap-3">
              <ArrowRightLeft className="shrink-0 mt-1 text-blue-500 w-5 h-5" />
              <span>
                <strong>Ville Archipel :</strong> Expansion par "tâches" spécialisées (Media City, Palm) reliées par autoroutes.
              </span>
            </li>
          </ul>
        </div>

        {/* Zurich Card */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-red-500 relative flex flex-col">
          <div className="absolute top-4 right-4 opacity-10">
            <ShieldCheck size={60} />
          </div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900">
            <ShieldCheck className="text-red-500" /> Zurich : La Stratégie de la Durée
          </h2>

          {/* VISUAL ANALYSIS SLOT ZURICH */}
          <div className="mb-6 h-48 bg-slate-50 rounded-xl border-2 border-dashed border-red-200 relative flex items-center justify-center p-4 text-center group">
             {/* COMMENTAIRE: Insérer ici image Tissu Urbain Zurich / Reconversion du PDF */}
             <img 
               src="" 
               alt="Vue aérienne du tissu urbain dense et continu de Zurich, ou reconversion d'une friche industrielle (Zurich West)" 
               className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" 
             />
             <div>
                <ImageIcon className="w-8 h-8 text-red-300 mx-auto mb-2" />
                <span className="text-xs font-mono text-red-400 bg-red-50 px-2 py-1 rounded">IMAGE PDF : Tissu Urbain / Reconversion</span>
                <p className="text-xs text-slate-400 mt-2 italic">"Continuité & Densité"</p>
             </div>
          </div>

          <ul className="space-y-4 text-slate-600 flex-1">
            <li className="flex gap-3">
              <Construction className="shrink-0 mt-1 text-red-500 w-5 h-5" />
              <span>
                <strong>Tissu Continu :</strong> Développement par sédimentation et reconversion (Zurich West) plutôt que par colonisation du vide.
              </span>
            </li>
            <li className="flex gap-3">
              <ArrowRightLeft className="shrink-0 mt-1 text-red-500 w-5 h-5" />
              <span>
                <strong>Ville Palimpseste :</strong> Le paysage reflète une histoire superposée, favorisant la marche et la mixité.
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Synthesis Box */}
      <div className="bg-slate-900 text-slate-200 p-8 rounded-3xl shadow-xl mt-8">
        <div className="flex items-center gap-3 mb-4 text-white">
          <Scale className="w-8 h-8" />
          <h3 className="text-2xl font-bold">Synthèse Visuelle</h3>
        </div>
        <p className="text-lg leading-relaxed opacity-90">
          Les images du PDF révèlent cette dichotomie : 
          <br/><br/>
          À <strong className="text-white">Dubaï</strong>, les photos montrent souvent des objets isolés sur fond de ciel ou de sable, soulignant une rupture d'échelle.
          <br/>
          À <strong className="text-white">Zurich</strong>, les visuels présentent une intégration complexe où le bâtiment neuf dialogue avec l'ancien et la topographie.
        </p>
      </div>

    </div>
  );
};