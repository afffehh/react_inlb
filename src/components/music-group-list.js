// import React, { useEffect, useState } from 'react';

// function MusicGroupList({ service }) {
//     const [groups, setGroups] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         async function fetchAllMusicGroups() {
//             try {
//                 const result = await service.readMusicGroupsAsync(0, true, null, 1000);
//                 setGroups(result.pageItems ?? []);
//             } catch (err) {
//                 setError('Could not load music groups.');
//             }
//         }
//         fetchAllMusicGroups();
//     }, [service]);

//     if (error) {
//         return <ul><li className="list-group-item text-danger">{error}</li></ul>;
//     }

//     return (
//         <ul>
//             {groups.map(group => (
//                 <li key={group.id}>{group.name}</li>
//             ))}
//         </ul>
//     );
// }

// export default MusicGroupList;