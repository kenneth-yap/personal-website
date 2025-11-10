'use client';

import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Countries you've visited - using NUMERIC IDs from the GeoJSON
const visitedCountries = [
  '040', // Austria
  '208', // Denmark
  '276', // Germany
  '380', // Italy
  '528', // Netherlands
  '724', // Spain
  '756', // Switzerland
  '826', // United Kingdom
  '336', // Vatican
  '231', // Ethiopia
  '156', // China
  '344', // Hong Kong
  '360', // Indonesia
  '392', // Japan
  '458', // Malaysia
  '702', // Singapore
  '158', // Taiwan
  '036', // Australia
  '784', // UAE
  '410', // South Korea
  '705', // Slovenia
  '191', // Croatia
  '348', // Hungary
  '703', // Slovakia
  '616', // Poland
  '203', // Czech Republic
  '250', // France
  '372', // Ireland
  '752', // Sweden
  '578', // Norway
  '196', // Cyprus
];

export default function WorldMap() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <ComposableMap
        projectionConfig={{
          scale: 147,
        }}
        className="w-full h-auto"
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any[] })  =>
            geographies.map((geo: any) => {
              const isVisited = visitedCountries.includes(geo.id);
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isVisited ? '#a855f7' : '#1e293b'} // Purple for visited, dark for unvisited
                  stroke="#475569"
                  strokeWidth={0.5}
                  style={{
                    default: {
                      fill: isVisited ? '#a855f7' : '#1e293b',
                      stroke: '#475569',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    hover: {
                      fill: isVisited ? '#c084fc' : '#334155',
                      stroke: '#60a5fa',
                      strokeWidth: 1,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    pressed: {
                      fill: isVisited ? '#a855f7' : '#1e293b',
                      stroke: '#475569',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <div className="text-center mt-4 text-gray-400 text-sm">
        <span className="inline-flex items-center mr-4">
          <span className="w-4 h-4 bg-purple-500 rounded-sm mr-2"></span>
          Visited
        </span>
        <span className="inline-flex items-center">
          <span className="w-4 h-4 bg-slate-800 rounded-sm mr-2"></span>
          On my way
        </span>
      </div>
    </motion.div>
  );
}