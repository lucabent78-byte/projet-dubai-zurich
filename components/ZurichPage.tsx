import React from 'react';
import { 
  Landmark, 
  Leaf, 
  Wallet,
  Clock,
  Map,
  Image as ImageIcon
} from 'lucide-react';

export const ZurichPage: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header Section */}
      <header className="space-y-2">
        <h1 className="text-4xl font-bold text-slate-900">Zurich, Suisse</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          L'incarnation de la stabilité historique et de la qualité de vie. Une métropole financière à taille humaine.
        </p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

        {/* 1. Histoire & Politique */}
        <div className="col-span-1 md:col-span-2 row-span-1 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 text-red-600 mb-3">
            <Landmark className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Régime & Histoire</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 prose text-slate-600 text-sm">
              <p className="mb-2">
                Contrairement à la monarchie absolue des EAU, Zurich s'inscrit dans un <strong>système fédéral démocratique</strong>. 
              </p>
              <p>
                Ville romaine (Turicum), développée organiquement. Sa richesse repose sur des siècles de commerce et d'industrie de précision.
              </p>
            </div>
             {/* IMAGE CONTAINER */}
             <div className="w-full md:w-1/3 h-32 md:h-auto bg-slate-50 rounded-xl overflow-hidden relative border-2 border-dashed border-slate-300 flex items-center justify-center p-2 text-center">
               {/* COMMENTAIRE: Insérer ici image Vieille Ville / Altstadt du PDF */}
               <img 
                 src="" 
                 alt="Vue pittoresque de la vieille ville de Zurich (Altstadt) montrant les toits historiques et les clochers des églises (Grossmünster)" 
                 className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" 
               />
               <div>
                  <ImageIcon className="w-6 h-6 text-slate-300 mx-auto mb-1" />
                  <span className="text-[10px] text-slate-500">IMAGE PDF : Vieille Ville</span>
               </div>
             </div>
          </div>
        </div>

        {/* 2. Key Metric: Stability */}
        <div className="col-span-1 bg-emerald-50 p-6 rounded-3xl border border-emerald-100 flex flex-col justify-center items-center text-center">
            <Clock className="w-10 h-10 text-emerald-600 mb-2" />
            <div className="text-3xl font-bold text-emerald-900">Lenteur</div>
            <div className="text-sm text-emerald-700 mt-1">Planifiée & Consultative</div>
            <p className="text-xs text-emerald-600 mt-4 px-2">
              Le développement urbain est soumis à des référendums.
            </p>
        </div>

        {/* 3. Localisation & Cadre */}
        <div className="col-span-1 md:col-span-1 row-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <Map className="w-6 h-6" />
              <h2 className="text-lg font-semibold">Géographie</h2>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Située au nord de la Suisse, à l'extrémité nord du lac de Zurich. Cadre alpin limitant l'étalement.
            </p>
            
            {/* IMAGE CONTAINER */}
            <div className="mt-auto h-40 bg-slate-50 rounded-xl overflow-hidden relative border-2 border-dashed border-slate-300 flex items-center justify-center p-2 text-center">
              {/* COMMENTAIRE: Insérer ici image Lac de Zurich / Vue Aérienne du PDF */}
              <img 
                src="" 
                alt="Vue panoramique du Lac de Zurich avec la ville au premier plan et les Alpes en arrière-plan" 
                className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" 
              />
               <div>
                  <ImageIcon className="w-6 h-6 text-slate-300 mx-auto mb-1" />
                  <span className="text-[10px] text-slate-500">IMAGE PDF : Lac de Zurich</span>
               </div>
            </div>
        </div>

        {/* 4. Économie & Global City */}
        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
           <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-2 text-slate-800">
               <Wallet className="w-6 h-6" />
               <h2 className="text-lg font-semibold">Hub Financier</h2>
             </div>
           </div>
           <div className="grid grid-cols-2 gap-4">
             <div className="text-sm text-slate-600">
               <p className="mb-2">Zurich est l'une des places financières les plus importantes au monde (~430k habitants).</p>
               <p>Économie de services à haute valeur ajoutée et recherche (ETH Zurich).</p>
             </div>
             
             {/* IMAGE CONTAINER: ZURICH WEST / MODERN ECONOMY */}
             <div className="bg-slate-50 rounded-xl border-2 border-dashed border-slate-300 relative flex items-center justify-center p-2">
                 {/* COMMENTAIRE: Insérer ici image Zurich West / Prime Tower du PDF */}
                 <img 
                   src="" 
                   alt="Vue moderne du quartier Zurich West avec la Prime Tower, illustrant la reconversion industrielle" 
                   className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" 
                 />
                 <div className="text-center">
                    <span className="text-[10px] text-slate-400">IMAGE PDF : Zurich West / Finance</span>
                 </div>
             </div>
           </div>
        </div>

         {/* 5. Urbanisme Durable */}
         <div className="col-span-1 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <Leaf className="w-5 h-5" />
              <h2 className="text-md font-semibold">Mobilité Douce</h2>
            </div>
            <p className="text-sm text-slate-600 mb-2">
              Priorité aux transports publics (Tramway) et à la préservation du patrimoine.
            </p>
             {/* IMAGE CONTAINER: TRAMWAY */}
             <div className="h-20 bg-slate-50 rounded-lg border-2 border-dashed border-slate-300 relative flex items-center justify-center">
                 {/* COMMENTAIRE: Insérer ici image Tramway du PDF */}
                 <img 
                   src="" 
                   alt="Tramway bleu de Zurich circulant dans une rue urbaine dense" 
                   className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" 
                 />
                 <span className="text-[10px] text-slate-400">IMAGE PDF : Tramway</span>
             </div>
         </div>

      </div>
    </div>
  );
};