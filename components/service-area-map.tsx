'use client';

import Link from 'next/link';
import {MapPin} from 'lucide-react';
import {useState} from 'react';
import {cities,cityName} from '@/lib/data';

const positions:Record<string,{left:number;top:number}>={
  'fort-worth':{left:58,top:19},
  arlington:{left:82,top:23},
  mansfield:{left:78,top:48},
  burleson:{left:58,top:52},
  crowley:{left:54,top:45},
  joshua:{left:51,top:67},
  cleburne:{left:51,top:88},
  aledo:{left:29,top:31},
  weatherford:{left:8,top:18},
  granbury:{left:9,top:71},
  benbrook:{left:44,top:35},
  kennedale:{left:70,top:38},
  midlothian:{left:94,top:63},
  alvarado:{left:72,top:78},
  godley:{left:36,top:70},
};

export function ServiceAreaMap(){
  const [active,setActive]=useState('burleson');
  const activeName=cityName(active);
  return <div>
    <div className="relative min-h-[520px] overflow-hidden border-4 border-ink bg-[#eeeae5] shadow-[0_14px_40px_rgba(32,29,26,.18)] sm:min-h-[600px]">
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(32,29,26,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(32,29,26,.12)_1px,transparent_1px)] [background-size:48px_48px]"/>
      <div className="absolute -left-24 top-[48%] h-28 w-[130%] -rotate-6 border-y-[18px] border-white/80 bg-ink/10" aria-hidden="true"/>
      <div className="absolute left-[55%] top-[-15%] h-[130%] w-20 rotate-[18deg] border-x-[12px] border-white/75 bg-ink/10" aria-hidden="true"/>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_52%,rgba(244,85,20,.18),transparent_28%)]"/>
      <div className="absolute left-5 top-5 z-10 border-l-4 border-oxide bg-ink px-4 py-3 text-white shadow-xl"><p className="text-xs font-black uppercase tracking-[.18em] text-oxide">Select a city marker</p><p className="mt-1 text-xs text-white/60">Burleson and the surrounding DFW region</p></div>
      <div className="absolute bottom-5 left-5 z-10 bg-white/90 px-3 py-2 text-[10px] font-black uppercase tracking-[.18em] text-ink/60">Dallas Fort Worth service region</div>
      {cities.map(city=>{
        const position=positions[city];
        const selected=active===city;
        return <button
          key={city}
          type="button"
          aria-label={`Select ${cityName(city)} service area`}
          aria-pressed={selected}
          onClick={()=>setActive(city)}
          style={{left:`${position.left}%`,top:`${position.top}%`}}
          className={`group absolute z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border-2 shadow-lg transition duration-200 hover:z-30 hover:scale-110 focus:z-30 focus:outline-none focus:ring-4 focus:ring-oxide/35 ${selected?'border-ink bg-oxide text-ink':'border-oxide bg-ink text-white hover:bg-oxide hover:text-ink'}`}
        >
          <MapPin size={20} strokeWidth={3} aria-hidden="true"/>
          <span className={`pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap px-2 py-1 text-[10px] font-black uppercase shadow-md transition ${selected?'bg-oxide text-ink':'bg-ink text-white group-hover:bg-oxide group-hover:text-ink group-focus:bg-oxide group-focus:text-ink'}`}>{cityName(city)}</span>
        </button>;
      })}
    </div>
    <div className="grid gap-4 border-x-4 border-b-4 border-ink bg-ink p-5 text-white sm:grid-cols-[1fr_auto] sm:items-center sm:p-6" aria-live="polite"><div><p className="text-xs font-black uppercase tracking-[.2em] text-oxide">Selected service area</p><h3 className="mt-2 font-display text-2xl uppercase">{activeName}, Texas</h3><p className="mt-2 text-sm text-white/70">Proudly serving homeowners in {activeName} and surrounding communities.</p></div><Link className="inline-flex min-h-12 items-center justify-center border-2 border-oxide px-5 text-sm font-black uppercase text-oxide transition hover:bg-oxide hover:text-ink" href={`/service-areas/${active}`}>View {activeName} services</Link></div>
    <p className="mt-3 text-xs text-ink/55">Select any marker to learn more. Marker locations are shown for regional orientation.</p>
  </div>;
}
