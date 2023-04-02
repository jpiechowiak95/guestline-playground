import { Button, HStack, Text } from '@chakra-ui/react';
import React from 'react';

type LabeledCounterProps = {
  label: string;
  value: number;
  setValue: (value: number) => void;
}

export const LabeledCounter: React.FC<LabeledCounterProps> = ({ label, value, setValue }) => {
  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <HStack spacing='2'>
      <Text fontSize='xs' mr='1'>{label}:</Text>
      <Button borderRadius='full' onClick={decrement} size='xs'>-</Button>
      <Text fontSize='xs'>{value}</Text>
      <Button borderRadius='full' onClick={increment} size='xs'>+</Button>
    </HStack>
  );
};