import React, { useState, useEffect } from 'react';

function ImageGrid() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []); 

  const loadMoreImages = () => {
    fetchImages();
  };

  return (
    <div className="container">
      <div className="row">
        {images.map((image) => (
          <div className="col-md-4 col-lg-3 mb-4" key={image.id}>
            <div className="card">
              <img src={image.download_url} alt={`Image ${image.id}`} className="card-img-top" />
            </div>
          </div>
        ))}
      </div>
      {isLoading && <p>Loading...</p>}
      <button className="btn btn-primary mt-3" onClick={loadMoreImages}>
        Load More
      </button>
    </div>
  );
}

export default ImageGrid;
