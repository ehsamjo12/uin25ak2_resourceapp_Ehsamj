// Resources.jsx
import resources from "../resources.js"; 

const Resources = ({ category }) => {
  const filteredResources = resources.filter(
    (resource) => resource.category.toLowerCase() === category
  );

  return (
    <section className="resources-container">
      <h2>{category.toUpperCase()}</h2>
      {filteredResources.length > 0 ? (
        filteredResources.map((resource, index) => (
          <article key={index}>
            <p>{resource.text}</p>
            <ul>
              {resource.sources.map((source, idx) => (
                <li key={idx} style={{ listStyleType: "disc", marginLeft: "20px" }}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))
      ) : (
        <p>Ingen ressurser tilgjengelig for denne kategorien.</p>
      )}
    </section>
  );
};

export default Resources;
