interface ImageProps {
  imageUrl: string;
}

const ImageComponent = ({ imageUrl }: ImageProps) => {
  return (
    <div className="profile-container">
      <div
        style={{
          borderRadius: "50%",
          overflow: "hidden",
          width: "15rem",
          height: "15rem",
          border: "4px solid #cf8e00",
          boxShadow:
            "0 0 15px rgba(207, 142, 0, 0.2), inset 0 0 5px rgba(0, 0, 0, 0.3)",
          position: "relative",
        }}
      >
        <img
          src={imageUrl}
          alt="A Freelance Full Stack Engineer"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          loading="lazy"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, transparent 70%, rgba(0,0,0,0.08) 100%)",
            mixBlendMode: "overlay",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background:
            "radial-gradient(circle at center, rgba(207, 142, 0, 0.1) 0%, transparent 60%)",
          filter: "blur(3px)",
          opacity: 0.25,
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default ImageComponent;
