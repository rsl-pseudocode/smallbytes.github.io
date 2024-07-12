interface ImageProps {
  imageUrl: string;
}

const ImageComponent = ({ imageUrl }: ImageProps) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        overflow: "hidden",
        width: "13rem",
        height: "13rem",
        border: "3px solid #b27900",
        objectFit: "cover",
      }}
    >
      <img
        src={imageUrl}
        alt="Profile"
        style={{ width: "100%", height: "auto" }}
        loading="lazy"
      />
    </div>
  );
};

export default ImageComponent;
