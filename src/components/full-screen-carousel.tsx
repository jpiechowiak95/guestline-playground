import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  HStack,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay
} from '@chakra-ui/react';
import React, { useState } from 'react';

type FullScreenCarouselProps = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

export const FullScreenCarousel: React.FC<FullScreenCarouselProps> = ({ images, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='full'>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <HStack justifyContent='center' py='8' w='full'>
            <IconButton
              aria-label="Previous Image"
              icon={<ChevronLeftIcon boxSize='6' />}
              isRound
              onClick={previousImage}
            />
            <Box>
              <Image alt='current carousel image' objectFit='cover' src={images[currentImageIndex]} />
            </Box>
            <IconButton
              aria-label="Next Image"
              icon={<ChevronRightIcon boxSize='6' />}
              isRound
              onClick={nextImage}
            />
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
