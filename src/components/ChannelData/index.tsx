import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div){
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>

        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            author="Andson Lourenco"
            date="22/02020"
            content="Mensagem de teste"
          />
        ))}

        <ChannelMessage
          author="User Bot"
          date="22/06/2020"
          isBot
          content={
            <>
              <Mention>@user bot</Mention> mensagem qualquier do bot
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
