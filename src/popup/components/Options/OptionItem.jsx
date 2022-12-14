import {
  Flex,
  Input,
  Select,
  Switch,
  Text
} from "@chakra-ui/react";

const OptionItem = (props) => {
  const {
    children,
    value,
    setValue,
    type = 'switch',
    disabled = false,
    placeholder = '',
    element = null,
  } = props;
  
  return (
    <Flex
      as='label'
      justifyContent='space-between'
      alignItems='center'
      py={1}
      px={2}
      mr={2}
      borderRadius={5}
      cursor='pointer'
      transition='background 0.15s ease-in-out'
      _hover={{
        background: `rgba(0, 0, 0, ${disabled ? '2.5%' : '10%'})`
      }}
    >
      <Text
        fontSize={16}
        fontWeight={500}
        color={disabled ? 'grey' : 'black'}
      >
        {children}
      </Text>

      {type === 'switch' ?
        <Switch
          colorScheme='secondary'
          isChecked={value}
          onChange={(e) => setValue(e.target.checked)}
          disabled={disabled}
        />
        : type === 'text' ?
        <Input
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={e => e.target.select()}
          variant='filled'
          placeholder={placeholder}
          size='sm'
          w={175}
        />
        : type === 'custom' && element
      }

    </Flex>
  )

  return null;
}

export { OptionItem };