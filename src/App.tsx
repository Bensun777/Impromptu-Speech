/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function App() {
  return (
    <div className="w-full h-screen overflow-hidden bg-slate-100">
      <iframe 
        src="/index.html" 
        className="w-full h-full border-none"
        title="Impromptu Speech Pro"
      />
    </div>
  );
}
