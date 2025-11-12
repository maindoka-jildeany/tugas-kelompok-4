import { useEffect, useState } from "react";

type Image = {
  id: number;
  author: string;
  url: string;
};

const ImageGallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        // Fetch only 6 specific images that are nature-themed
        const imageIds = [10, 11, 12, 13, 14, 15]; // These IDs have nice nature photos
        const imagesData = await Promise.all(
          imageIds.map(async (id) => {
            const response = await fetch(`https://picsum.photos/id/${id}/info`);
            if (!response.ok) throw new Error("Failed to fetch image info");
            const data = await response.json();
            return {
              id: data.id,
              author: data.author,
              url: `https://picsum.photos/id/${id}/400/300`,
            };
          })
        );
        setImages(imagesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleAddImage = async () => {
    try {
      // Get a random image ID between 1 and 1000
      const randomId = Math.floor(Math.random() * 1000) + 1;
      const response = await fetch(`https://picsum.photos/id/${randomId}/info`);
      if (!response.ok) throw new Error("Failed to fetch image info");
      const data = await response.json();

      const newImage = {
        id: data.id,
        author: data.author,
        url: `https://picsum.photos/id/${randomId}/400/300`,
      };

      setImages((prev) => [...prev, newImage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add image");
    }
  };

  const handleDeleteImage = (id: number) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  if (loading) {
    return (
      <section className="status-page">
        <h1 className="status-title">Loading Gallery…</h1>
        <p className="status-text">Fetching the latest landscapes. Hold tight!</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="status-page">
        <h1 className="status-title">Gallery Error</h1>
        <p className="status-text">{error}</p>
        <button className="cta-button secondary" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <h1 className="page-title">Nature Capsules</h1>
          <p className="page-subtitle">
            A rotating feed of tranquil landscapes, curated from the Picsum community.
          </p>
        </div>
        <button className="cta-button" onClick={handleAddImage}>
          <span aria-hidden>➕</span>
          Add Random Image
        </button>
      </div>

      {images.length === 0 ? (
        <div className="info-card">
          <p className="lead-text">
            Your gallery is warming up. Tap the button above to pull in a fresh scene from our nature stream.
          </p>
        </div>
      ) : (
        <div className="image-grid">
          {images.map((image) => (
            <div key={image.id} className="image-card">
              <img src={image.url} alt={`Photo by ${image.author}`} />
              <div className="image-overlay">
                <p className="image-author">By {image.author}</p>
                <button
                  className="button button-danger"
                  onClick={() => handleDeleteImage(image.id)}
                >
                  🗑️ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
