
// import React from 'react';

// const Layout = ({ children }) => {
//     return (
//         <div>
//             {/* Add your layout structure here */}
//             {children}
//         </div>
//     );
// };

// export default Layout;

// import React from 'react';

// const Layout = ({ children }) => {
//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//             <div style={{ width: '80%', maxWidth: '800px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
//                 <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Random Financial Data</h1>
//                 {children}
//             </div>
//         </div>
//     );
// };

// export default Layout;


import React from 'react';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          
                {children}
            </div>
    );
};

export default Layout;
