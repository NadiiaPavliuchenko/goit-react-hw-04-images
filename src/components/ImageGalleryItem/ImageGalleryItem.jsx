import { ImageGalleryLi, ImageGalleryLiImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = props => {
  const showModal = () => {
    props.onShowModal();
  };
  const { id, webformatURL } = props.imageData;
  return (
    <ImageGalleryLi key={id}>
      <ImageGalleryLiImage
        src={webformatURL}
        alt="imageStock"
        onClick={showModal}
      />
    </ImageGalleryLi>
  );
};

export default ImageGalleryItem;
