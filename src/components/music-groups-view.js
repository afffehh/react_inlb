import React, { useState, useEffect } from "react";
import MusicApiService from "./music-api-service";

const pageSize = 10; // Number of items per page

export function RenderPage() {
    const [groups, setGroups] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const service = new MusicApiService();
        setLoading(true);
        service.readMusicGroupsAsync(0, 1000)
            .then(data => {
                setGroups(data.pageItems || data || []);
                setLoading(false);
            })
            .catch(() => {
                setError("Could not load music groups.");
                setLoading(false);
            });
    }, []);

    const maxPage = Math.ceil(groups.length / pageSize);
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const currentGroups = groups.slice(start, end);

    return (
        <div className="container" style={{ marginTop: "5rem" }}>

            <div className="row">
                <div className="col">
                    <h2>Music Groups</h2>
                    {loading && <p>Loading...</p>}
                    {error && <p className="text-danger">{error}</p>}
                    <ul className="list-group list-group-flush shadow-sm">
                        {currentGroups.map((group, index) => (
                            <li
                                key={group.id || index}
                                className="list-group-item d-flex justify-content-between align-items-center list-group-item-light"
                            >
                                <span>
                                    <strong>{group.name || `Musicgroup ${start + index + 1}`}</strong>
                                </span>
                                {group.albums && group.albums.length > 0 && (
                                    <ul className="list-group mt-2">
                                        {group.albums.map((album, i) => (
                                            <li key={i} className="list-group-item">{album}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-3">
                        <button
                            className="btn btn-primary me-2"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Prev
                        </button>
                        <button
                            className="btn btn-primary"
                            disabled={currentPage === maxPage}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}