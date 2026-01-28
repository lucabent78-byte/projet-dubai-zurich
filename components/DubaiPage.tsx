import React from 'react';
import { 
  MapPin, 
  TrendingUp, 
  Plane, 
  TrainFront, 
  Anchor, 
  DollarSign, 
  Building,
  Image as ImageIcon
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Data extracted from PDF page 1 "Démographie"
const populationData = [
  { year: '1975', population: 183187 },
  { year: '1980', population: 276301 },
  { year: '1985', population: 370788 },
  { year: '1995', population: 689420 },
  { year: '2000', population: 862387 },
  { year: '2005', population: 1321453 },
  { year: '2010', population: 1905476 },
  { year: '2015', population: 2446675 },
  { year: '2022', population: 3549900 },
];

export const DubaiPage: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header Section */}
      <header className="space-y-2">
        <h1 className="text-4xl font-bold text-slate-900">Dubaï, Émirats Arabes Unis</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          L'archétype de la ville à croissance fulgurante. Du désert à la métropole mondiale en quelques décennies.
        </p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* 1. Localisation & Situation (Large Card) */}
        <div className="col-span-1 md:col-span-2 row-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <MapPin className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Localisation & Situation</h2>
          </div>
          <div className="prose text-slate-600 mb-2">
            <p className="mb-2">
              <strong className="text-slate-900">Situation :</strong> Dubaï est située au Moyen-Orient, au nord-est de la péninsule Arabique. Position stratégique de carrefour entre l'Europe, l'Asie et l'Afrique.
            </p>
          </div>
          
          {/* IMAGE CONTAINER */}
          <div className="mt-auto h-64 bg-slate-50 rounded-xl overflow-hidden relative group border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-4 text-center">
             {/* COMMENTAIRE: Insérer ici l'image de la carte géopolitique du PDF (Page 1) */}
             <img 
               src="" 
               alt="Carte géopolitique du Moyen-Orient mettant en évidence la position stratégique de Dubaï sur la côte sud-est du Golfe Persique" 
               className="absolute inset-0 w-full h-full object-cover opacity-0 z-10"
             />
             <ImageIcon className="w-8 h-8 text-slate-400 mb-2" />
             <span className="text-xs font-mono bg-slate-200 text-slate-600 px-2 py-1 rounded mb-1">IMAGE PDF : Page 1</span>
             <p className="text-xs text-slate-400 italic max-w-xs">
               "Carte de localisation de Dubaï au Moyen-Orient"
             </p>
          </div>
        </div>

        {/* 2. Démographie (Chart Card) */}
        <div className="col-span-1 md:col-span-2 row-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
          <div className="flex items-center gap-2 text-purple-600 mb-4">
            <TrendingUp className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Explosion Démographique</h2>
          </div>
          <p className="text-slate-500 text-sm mb-4">
            Population 2024 : ~3,6 millions. Croissance portée par une immigration massive (90% d'expatriés).
          </p>
          <div className="flex-1 min-h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={populationData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="year" 
                  tick={{fontSize: 12, fill: '#64748b'}} 
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  tick={{fontSize: 12, fill: '#64748b'}} 
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                />
                <Tooltip 
                  cursor={{fill: '#f1f5f9'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar 
                  dataKey="population" 
                  fill="#4f46e5" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 3. Économie (PUB) */}
        <div className="col-span-1 md:col-span-1 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 text-emerald-600 mb-3">
            <DollarSign className="w-6 h-6" />
            <h2 className="text-lg font-semibold">Produit Urbain Brut</h2>
          </div>
          <div className="text-3xl font-bold text-slate-800 mb-1">110-120</div>
          <div className="text-sm font-medium text-slate-500 mb-4">Milliards de dollars</div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Génère 25% à 30% du PIB total des EAU.
          </p>
        </div>

        {/* 4. Connexions (Hub Logistique) */}
        <div className="col-span-1 md:col-span-1 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-3xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Anchor className="w-5 h-5" /> Hub Mondial
            </h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Plane className="w-4 h-4 mt-0.5 shrink-0" />
                <span><strong className="text-white">DXB :</strong> Hub international majeur.</span>
              </li>
            </ul>
          </div>
          
          {/* IMAGE CONTAINER */}
          <div className="mt-4 h-24 w-full bg-white/5 rounded-lg overflow-hidden relative border border-white/10 flex items-center justify-center">
             {/* COMMENTAIRE: Insérer ici l'image du Port Jebel Ali ou Aéroport DXB du PDF */}
             <img 
               src="" 
               alt="Vue aérienne du port Jebel Ali montrant l'immensité des terminaux conteneurs artificiels gagnés sur la mer" 
               className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" 
             />
             <div className="text-[10px] text-slate-400 text-center px-1">
               IMAGE PDF<br/>Port Jebel Ali
             </div>
          </div>
        </div>

        {/* 5. Urbanisme (CBD & Métro) */}
        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
           <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-orange-600">
                <Building className="w-6 h-6" />
                <h2 className="text-lg font-semibold">Paysage Urbain</h2>
              </div>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                 <p className="text-sm text-slate-600">
                    <strong className="text-slate-900">Transports :</strong> Le métro aérien structure la ville linéaire.
                 </p>
                 {/* IMAGE CONTAINER: METRO */}
                 <div className="h-32 bg-slate-50 rounded-xl relative overflow-hidden border-2 border-dashed border-slate-300 flex items-center justify-center">
                    {/* COMMENTAIRE: Insérer ici le plan du métro du PDF */}
                    <img 
                      src="" 
                      alt="Schéma ou carte du réseau de métro de Dubaï (Lignes Rouge et Verte) longeant l'axe Sheikh Zayed Road" 
                      className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" 
                    />
                    <div className="text-center">
                       <TrainFront className="text-slate-300 w-6 h-6 mx-auto mb-1" />
                       <span className="text-[10px] text-slate-400 block">IMAGE PDF : Plan Métro</span>
                    </div>
                 </div>
              </div>
              
              <div className="space-y-2">
                 <p className="text-sm text-slate-600">
                    <strong className="text-slate-900">Business Bay :</strong> Concentration de gratte-ciels.
                 </p>
                 {/* IMAGE CONTAINER: BUSINESS BAY */}
                 <div className="h-32 bg-slate-50 rounded-xl relative overflow-hidden border-2 border-dashed border-slate-300 flex items-center justify-center">
                    {/* COMMENTAIRE: Insérer ici une vue de Business Bay du PDF */}
                    <img 
                      src="" 
                      alt="Vue panoramique de Business Bay montrant la densité des tours de bureaux modernes le long du canal" 
                      className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" 
                    />
                     <div className="text-center">
                       <Building className="text-slate-300 w-6 h-6 mx-auto mb-1" />
                       <span className="text-[10px] text-slate-400 block">IMAGE PDF : Business Bay</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};