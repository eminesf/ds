import React, { useRef, useState } from 'react';
import type { Meta, Story } from '@storybook/react';

import { noop } from '../../../utils';
import { Button } from '../../button';
import { Flex } from '../../flex';
import { PhoneField } from '../../phone-field';
import { Text } from '../../text';
import {
  AppButton,
  AppHeader,
  AppHeaderBackAction,
  AppHeaderCloseAction,
  AppHeaderTitle,
} from '..';

import type { AppOverlayFooterProps } from '.';
import { AppOverlayFooter } from '.';

export default {
  title: 'App/OverlayFooter',
  component: AppOverlayFooter,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    chromatic: {
      viewports: [320],
    },
  },
  argTypes: {},
} as Meta;

function Content() {
  return (
    <Flex gap="sm" direction="column">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis est eget velit semper
        molestie efficitur sit amet massa. Ut auctor, lorem in rutrum fringilla, sapien urna
        facilisis purus, in interdum augue felis ut libero. Mauris lobortis, velit id aliquam
        imperdiet, quam mi sodales leo, id molestie eros orci at tortor. Mauris et neque in velit
        vestibulum consectetur ut eu ante. Mauris porta erat ac vulputate placerat. Etiam nec
        condimentum est, a faucibus libero. Phasellus sed ante pellentesque mauris sodales euismod.
        Aliquam at diam arcu. Suspendisse sagittis quis dolor a euismod. Suspendisse posuere ante id
        mauris fermentum tempor.
      </Text>
      <Text>
        Nullam elementum ligula et porttitor rhoncus. Quisque ultrices fringilla quam eget
        tincidunt. Quisque fringilla egestas augue, vitae fermentum nibh sodales et. Sed commodo
        bibendum ligula ac porta. Fusce imperdiet tortor nec nibh elementum hendrerit. Etiam
        porttitor tincidunt ligula, vel tincidunt nulla congue ac. Curabitur pellentesque, lorem ac
        gravida placerat, ex ante luctus nulla, non gravida purus lectus id metus. Aenean vulputate,
        urna sed elementum facilisis, sapien magna consectetur ex, in dapibus eros urna nec sapien.
        Vivamus in lorem pulvinar eros tempor facilisis. Phasellus vulputate eros enim, eget lacinia
        erat molestie id. Nullam sit amet nibh sapien. Nam venenatis augue arcu, at ornare ex
        pellentesque ac. Vestibulum quis sagittis nisi. In a erat pellentesque, convallis libero
        sed, venenatis elit. Praesent imperdiet blandit urna vel efficitur. Duis hendrerit fringilla
        orci, sed facilisis enim convallis ac.
      </Text>
      <Text>
        Morbi nunc quam, varius a aliquet a, facilisis at tortor. Vivamus nulla sapien, maximus
        egestas ornare vel, ornare in ipsum. Etiam dapibus dictum venenatis. Sed auctor diam diam,
        vitae pretium quam pellentesque in. Fusce gravida et neque sed gravida. Aenean pharetra
        mollis nisl, et malesuada nisi congue ut. Nulla eu mi quis orci commodo porttitor. In
        pretium magna ut leo molestie, vel ultricies nisl sodales. Cras fringilla quam ultrices,
        condimentum tellus ac, varius arcu. Sed porta ex eu ultrices imperdiet. Nam dolor dui,
        posuere in laoreet at, ornare non eros. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos.
      </Text>
      <Text>
        Vestibulum nisi augue, sagittis id quam fringilla, tincidunt tempus libero. Aenean placerat
        mi quis turpis volutpat dapibus. Pellentesque nec semper elit. Quisque id enim iaculis,
        sollicitudin tortor imperdiet, maximus elit. Nullam bibendum felis vel sem eleifend dapibus
        auctor eget diam. Phasellus sit amet urna sem. Nulla aliquam massa et consequat iaculis.
        Mauris non turpis ligula. Phasellus quam metus, rhoncus eu quam sed, volutpat maximus eros.
        Ut placerat luctus egestas.
      </Text>
      <Text>
        Pellentesque mattis turpis orci, id pulvinar dui rhoncus ac. Phasellus eu eleifend tortor.
        Vestibulum enim sapien, maximus non viverra eu, congue vel ante. Duis a lacus non sapien
        vestibulum euismod. Aliquam tellus nisi, scelerisque eu lacus vitae, maximus placerat mi.
        Quisque mollis sem justo, eu elementum purus faucibus imperdiet. Phasellus eget eros ligula.
        Quisque malesuada nec neque id fringilla. Nullam orci ante, tempor ut vestibulum ut, semper
        et dui. Ut sit amet ipsum tincidunt, fringilla nulla laoreet, maximus dui. Duis faucibus
        turpis at rutrum laoreet. Proin euismod, tortor sit amet luctus malesuada, turpis libero
        pretium magna, et bibendum orci sapien ut ex. Fusce rhoncus et tortor in euismod. In sit
        amet convallis ligula, eget ornare massa.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis est eget velit semper
        molestie efficitur sit amet massa. Ut auctor, lorem in rutrum fringilla, sapien urna
        facilisis purus, in interdum augue felis ut libero. Mauris lobortis, velit id aliquam
        imperdiet, quam mi sodales leo, id molestie eros orci at tortor. Mauris et neque in velit
        vestibulum consectetur ut eu ante. Mauris porta erat ac vulputate placerat. Etiam nec
        condimentum est, a faucibus libero. Phasellus sed ante pellentesque mauris sodales euismod.
        Aliquam at diam arcu. Suspendisse sagittis quis dolor a euismod. Suspendisse posuere ante id
        mauris fermentum tempor.
      </Text>
      <Text>
        Nullam elementum ligula et porttitor rhoncus. Quisque ultrices fringilla quam eget
        tincidunt. Quisque fringilla egestas augue, vitae fermentum nibh sodales et. Sed commodo
        bibendum ligula ac porta. Fusce imperdiet tortor nec nibh elementum hendrerit. Etiam
        porttitor tincidunt ligula, vel tincidunt nulla congue ac. Curabitur pellentesque, lorem ac
        gravida placerat, ex ante luctus nulla, non gravida purus lectus id metus. Aenean vulputate,
        urna sed elementum facilisis, sapien magna consectetur ex, in dapibus eros urna nec sapien.
        Vivamus in lorem pulvinar eros tempor facilisis. Phasellus vulputate eros enim, eget lacinia
        erat molestie id. Nullam sit amet nibh sapien. Nam venenatis augue arcu, at ornare ex
        pellentesque ac. Vestibulum quis sagittis nisi. In a erat pellentesque, convallis libero
        sed, venenatis elit. Praesent imperdiet blandit urna vel efficitur. Duis hendrerit fringilla
        orci, sed facilisis enim convallis ac.
      </Text>
      <Text>
        Morbi nunc quam, varius a aliquet a, facilisis at tortor. Vivamus nulla sapien, maximus
        egestas ornare vel, ornare in ipsum. Etiam dapibus dictum venenatis. Sed auctor diam diam,
        vitae pretium quam pellentesque in. Fusce gravida et neque sed gravida. Aenean pharetra
        mollis nisl, et malesuada nisi congue ut. Nulla eu mi quis orci commodo porttitor. In
        pretium magna ut leo molestie, vel ultricies nisl sodales. Cras fringilla quam ultrices,
        condimentum tellus ac, varius arcu. Sed porta ex eu ultrices imperdiet. Nam dolor dui,
        posuere in laoreet at, ornare non eros. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos.
      </Text>
      <Text>
        Vestibulum nisi augue, sagittis id quam fringilla, tincidunt tempus libero. Aenean placerat
        mi quis turpis volutpat dapibus. Pellentesque nec semper elit. Quisque id enim iaculis,
        sollicitudin tortor imperdiet, maximus elit. Nullam bibendum felis vel sem eleifend dapibus
        auctor eget diam. Phasellus sit amet urna sem. Nulla aliquam massa et consequat iaculis.
        Mauris non turpis ligula. Phasellus quam metus, rhoncus eu quam sed, volutpat maximus eros.
        Ut placerat luctus egestas.
      </Text>
      <Text>
        Pellentesque mattis turpis orci, id pulvinar dui rhoncus ac. Phasellus eu eleifend tortor.
        Vestibulum enim sapien, maximus non viverra eu, congue vel ante. Duis a lacus non sapien
        vestibulum euismod. Aliquam tellus nisi, scelerisque eu lacus vitae, maximus placerat mi.
        Quisque mollis sem justo, eu elementum purus faucibus imperdiet. Phasellus eget eros ligula.
        Quisque malesuada nec neque id fringilla. Nullam orci ante, tempor ut vestibulum ut, semper
        et dui. Ut sit amet ipsum tincidunt, fringilla nulla laoreet, maximus dui. Duis faucibus
        turpis at rutrum laoreet. Proin euismod, tortor sit amet luctus malesuada, turpis libero
        pretium magna, et bibendum orci sapien ut ex. Fusce rhoncus et tortor in euismod. In sit
        amet convallis ligula, eget ornare massa.
      </Text>
    </Flex>
  );
}

export const Default: Story<AppOverlayFooterProps> = (args) => (
  <>
    <AppHeader {...args}>
      <AppHeaderBackAction onPress={noop} />
      <AppHeaderTitle>Título</AppHeaderTitle>
      <AppHeaderCloseAction onPress={noop} />
    </AppHeader>
    <Content />
    <AppOverlayFooter {...args}>
      <Button onPress={noop} size="lg" iconAfter="long-arrow-right">
        Continuar
      </Button>
    </AppOverlayFooter>
  </>
);

Default.storyName = 'Padrão';
Default.args = {};

export const WithFloatingButton: Story<AppOverlayFooterProps> = (args) => {
  const [counter, setCounter] = useState(0);
  const phoneRef = useRef(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        setCounter((prevCounter) => prevCounter + 1);
      }}
    >
      <PhoneField ref={phoneRef} label="Telefone" />

      <AppOverlayFooter {...args}>
        <AppButton
          onPress={noop}
          size="lg"
          type="submit"
          floatingTrigger={phoneRef}
          iconAfter="long-arrow-right"
        >
          Continuar {counter}
        </AppButton>
      </AppOverlayFooter>
      <Content />
    </form>
  );
};

WithFloatingButton.storyName = 'Com botão flutuante';
WithFloatingButton.args = {};
