import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { useFocusRing } from '@react-aria/focus';
import { useId } from '@react-aria/utils';
import cn from 'clsx';

import { Flex } from '../../../flex';
import {
  SiteFooterInfo,
  SiteFooterInfoProps,
  SiteFooterInfoRef,
  SiteFooterInfoTitle,
} from '../site-footer-info';

import styles from '../site-footer.module.css';

type Ref = SiteFooterInfoRef;

type Props = {
  title?: string;
} & Omit<SiteFooterInfoProps, 'align'>;

function GooglePlayIcon() {
  const id = useId();

  return (
    <svg
      role="img"
      style={{ maxWidth: 189, maxHeight: 54.63, height: '100%', width: '100%' }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 217 64"
      focusable="false"
      aria-hidden="true"
    >
      <defs>
        <path
          id={`${id}-c`}
          d="M16.211 12.525l20.028 20.03 6.789-6.788-23.477-13.34c-.648-.367-1.258-.54-1.8-.54-.618 0-1.15.223-1.54.638"
        />
        <path
          id={`${id}-b`}
          d="M16.211 52.583c.738.785 1.961.879 3.34.098l23.473-13.34-6.785-6.785L16.21 52.583zm0 0"
        />
        <path
          id={`${id}-a`}
          d="M36.239 32.317v.473l6.636 6.64.149-.09 7.863-4.464c2.246-1.277 2.246-3.363 0-4.64l-7.86-4.47-.152-.085-6.636 6.636zm0 0"
        />
      </defs>
      <defs>
        <clipPath id={`${id}-d`}>
          <path d="M-.761.556h217v63.84h-217V.556zm0 0" />
        </clipPath>
        <clipPath id={`${id}-e`}>
          <path d="M-.761-.444h217.609v64.84H-.762V-.444zm0 0" />
        </clipPath>
        <clipPath id={`${id}-f`}>
          <path d="M36.239 25.696h16v13.801h-16v-13.8zm0 0" />
        </clipPath>
        <clipPath id={`${id}-g`}>
          <use xlinkHref={`#${id}-a`} />
        </clipPath>
        <clipPath id={`${id}-h`}>
          <use xlinkHref={`#${id}-a`} />
        </clipPath>
        <clipPath id={`${id}-j`}>
          <path d="M16.239 32.556h27v21h-27v-21zm0 0" />
        </clipPath>
        <clipPath id={`${id}-k`}>
          <use xlinkHref={`#${id}-b`} />
        </clipPath>
        <clipPath id={`${id}-l`}>
          <use xlinkHref={`#${id}-b`} />
        </clipPath>
        <clipPath id={`${id}-m`}>
          <path d="M25.914 22.821L5.79 42.946l23.8 23.801 20.125-20.129-23.8-23.797zm3.676-3.675l-3.676 3.675 23.801 23.797 3.672-3.672-23.797-23.8zm0 0" />
        </clipPath>
        <clipPath id={`${id}-o`}>
          <path d="M16.239 11.556h27v21h-27v-21zm0 0" />
        </clipPath>
        <clipPath id={`${id}-p`}>
          <use xlinkHref={`#${id}-c`} />
        </clipPath>
        <clipPath id={`${id}-q`}>
          <use xlinkHref={`#${id}-c`} />
        </clipPath>
        <clipPath id={`${id}-r`}>
          <path d="M5.79 22.247l13.206 13.207 23.801-23.797-13.21-13.21-23.798 23.8zm13.206 13.207l10.59 10.59 23.801-23.797-10.59-10.59-23.8 23.797zm0 0" />
        </clipPath>
        <image
          id={`${id}-i`}
          width={165}
          height={138}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACKCAIAAABEsx1uAAAABmJLR0QA/wD/AP+gvaeTAAABiklEQVR4nO3RQQrCMBRAwdYLeP/zeC0hXYhotRURCsKbWSWk/Ca8+Xo5T8/m9/XYP7p/sHt0247t08d6fJw/TfNYb3+45HrIxiW/GXLwS18GHuB0+B/4J3q36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLXq36N2id4veLQuvRg30apKsewAAAABJRU5ErkJggg=="
        />
        <image
          id={`${id}-n`}
          width={269}
          height={207}
          xlinkHref="data:image/png;base64,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"
        />
        <image
          id={`${id}-s`}
          width={269}
          height={207}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAADPCAIAAABgJxNUAAAABmJLR0QA/wD/AP+gvaeTAAAI0UlEQVR4nO2dS24kNxAFU31br3xDX228KGmo7koWM8lk8VMRG9sPAh8hKODRgOj39e9//8iXfHAKdL5sX6d8VedGgFheIiJ/PtNToPPH9nXKV3VuBIjl9f1PVAHI80r/iioAGV5v/4UqABqvzwBVAE687v/BRRVYjpeM+MFFFViL7z93oQrABen3E1QByPH2ezyqAKh8/n0XqgCcOf29MKoAnFA8EVQBeEf3RFAF4BdZTwRVAH648kRQBUBEip7I4qoAhFD2RFZWhf+lQAivaf84hCowDy+Z+DcHVIFJ+HkHiSoAeX69g0QVgAzv7yBRBUDj9A4SVQBOaO8gUQXgncw7SFQB+EX+HSSqAPxw+Q4SVQBEpPwOElUATO8gUQUez+uPYVIBVeDhHJ9zhyqoAlf8/Zw7VEEVyPL7c+5QBVVA5+Nz7lAFVUDh/Dl3qIIq8In6OXeogirwxkv9qUEVex08AX3vV1DFUwfbk937FVTx1MHeXO39Cqp46mBjCnu/giqeOtiV8t6voIqnDrbEtPcrqOKpg/2w7v0KqnjqYDMce7+CKp462Anf3q+giqcOtsG99yuo4qmDPajZ+xVU8dTBBlTu/QqqeOpgder3fgVVPHWwNE17v4IqnjpYl9a9X0EVTx0sSsDer6CKpw5WJGbvV1DFUwfLEbb3K6jiqYO1iNz7FVTx1MFCBO/9Cqp46mAV4vd+BVU8dbAEXfZ+BVU8dTA/vfZ+BVU8dTA5Hfd+BVU8dTAzffd+BVU8dTAt3fd+BVU8dTAnd+z9Cqp46mBCbtr7FVTx1MFs3Lf3K6jiqYOpuHXvV1DFUwfzoH3O3QlUCW9ElbXIfM7dCVQJb0SVhch/zt0JVAlvRJVVuPycuxOoEt6IKktQ+py7E6gS3ogq82P4nLsTqBLeiCqTo+yYosqQRlSZGX3HFFWGNKLKtGR3TFFlSCOqzMnVjimqDGlElQkp7JiiypBGVJmN8o4pqgxpRJWp0N5BosocjagyD5l3kKgyRyOqTEL+HSSqzNGIKjNw+Q4SVeZoRJXhlN5BosocjagyFsM7SFSZoxFVBmJ7B4kqczSiyihse79aiipDGlFlCOa9Xy1FlSGNqHI/nr1fLUWVIY2ocjPOvV8tRZUhjahyJ/69Xy1FlSGNqHIbVXu/WooqQxpR5R5MO6aokr/C+EZUuQHrjimq5K8wvhFVeuPYMUWV/BXGN6JKV3w7pqiSv8L4RlTph3vHFFXyVxjfiCqdqNkxRZX8FcY3okoPKndMUSV/hfGNqBJO/Y4pquSvML4RVWJp2jFFlfwVxjeiSiCtO6aokr/C+EZUiSJgxxRV8lcY34gqIcTsmKJK/grjG1GlnbIngiqeRlTZEtPer6CKpxFV9sO69yuo4mlElc1w7P0KqngaUWUnfHu/giqeRlTZBvfer6CKpxFV9qBm71dQxdOIKhtQufcrqOJpRJXVqd/7FVTxNKLK0jTt/QqqeBpRZV1a934FVTyNqLIoAXu/giqeRlRZkZi9X0EVTyOqLMdL+RFBlf6NqLIWx/suVDkyVEEVnb/vu1DlyFAFVRR+v+9ClSNDFVT55ON9F6ocGaqgyhvn912ocmSogioJdccUVY4MVVDlm9yOKaocGaqgisjljimqHBmqoEphxxRVjgxVnq5KcccUVY4MVR6timXHFFWODFWeq4rtc+5Q5TtDlYeqYtr7FVRJGao8URXr3q+gSspQ5XGqOPZ+BVVShirPUsW39yuokjJUeZAq7r1fQZWUocpTVKnZ+xVUSRmqPEKVyr1fQZWUocr+qtTv/QqqpAxVNlelae9XUCVlqLKzKq17v4IqKUOVbVUJ2PsVVEkZquypSszer6BKylBlQ1XC9n4FVVKGKrupErn3K6iSMlTZSpXgvV9BlZShyj6qxO/9CqqkDFU2UaXL3q+gSspQZQdVeu39CqqkDFWWV6Xj3q+gSspQZW1V+u79CqqkDFUWVqX73q+gSspQZVVV7tj7FVRJGaosqcpNe7+CKilDlfVUuW/vV1AlZaiymCq37v0KqqQMVVZSRXvfhSoNdfpRqNJWN5zM+y5UaajTj0KVtrqx5N93oUpDnX4UqrTVDeTyfReqNNTpR6FKW90oSu+7UKWhTj8KVdrqhmB434UqDXX6UajSVnc/6t5vOUIVe51+FKq01d1Mbu+3HKGKvU4/ClXa6u7kYu+3HKGKvU4/ClXa6m7jeu+3HKGKvU4/ClXa6u6huPdbjlDFXqcfhSptdTdg2fstR6hir9OPQpW2ut4Y937LEarY6/SjUKWtriv2vd9yhCr2Ov0oVGmr64dr77ccoYq9Tj8KVdrqOuHd+y1HqGKv049Clba6HlTs/ZYjVLHX6UehSltdOHV7v+UIVex1+lGo0lYXS/XebzlCFXudfhSqtNUF0rL3W45QxV6nH4UqbXVRNO79liNUsdfpR6FKW10I7Xu/5QhV7HX6UajSVtdOyN5vOUIVe51+FKq01TUStfdbjlDFXqcfhSptdS0E7v2WI1Sx1+lHoUpbXTWmHdOJv8uocmSo0lcV647pxN9lVDkyVOmoimPHdOLvMqocGar0UsW3YzrxdxlVjgxVuqji3jGd+LuMKkeGKvGq1OyYTvxdRpUjQ5VgVWyfc1d7CVSxN6JKeGOgKsreb+wlUMXeiCrhjVGq6Hu/sZdAFXsjqoQ3hqiS3fuNvQSq2BtRJbyxXZWrvd/YS6CKvRFVwhsbVSns/cZeAlXsjagS3tiiSnnvN/YSqGJvRJXwxmpVTHu/sZdAFXsjqoQ31qli3fuNvQSq2BtRJbyxQhXH3m/sJVDF3ogq4Y1eVXx7v7GXQBV7I6qEN7pUce/9xl4CVeyNqBLeaFelZu839hKoYm9ElfBGY13l3m/sJVDF3ogq4Y2Wuvq938BLGBtRxV6nH4UqtXVNe79Rl7A3ooq9Tj8KVarqWvd+Qy7hakQVe51+FKr46wL2ftsv4W1EFXudfhSqOOti9n4bL1HRiCr2Ov0oVPHU/Q/Jwd5Zl0PMeAAAAABJRU5ErkJggg=="
        />
      </defs>
      <g clipPath={`url(#${id}-d)`}>
        <path d="M209.426 63.242H8.19a7.381 7.381 0 01-7.38-7.379V8.188A7.384 7.384 0 018.19.804h201.235a7.384 7.384 0 017.383 7.383v47.675a7.381 7.381 0 01-7.383 7.38" />
      </g>
      <g clipPath={`url(#${id}-e)`}>
        <path
          fill="#A7A9AB"
          d="M8.188 1.613a6.582 6.582 0 00-6.575 6.575v47.675c0 3.625 2.95 6.57 6.575 6.57h201.238c3.625 0 6.574-2.945 6.574-6.57V8.188a6.582 6.582 0 00-6.574-6.575H8.188zm201.238 62.438H8.188C3.671 64.05 0 60.379 0 55.863V8.188C0 3.671 3.672 0 8.188 0h201.238c4.515 0 8.187 3.672 8.187 8.188v47.675c0 4.516-3.672 8.188-8.187 8.188"
        />
      </g>
      <path
        fill="#FFF"
        d="M172.184 48.293h3V28.187h-3v20.106zm27.03-12.863l-3.44 8.718h-.102l-3.57-8.718h-3.235l5.356 12.183-3.055 6.778h3.133l8.25-18.961h-3.336zm-17.023 10.578c-.98 0-2.351-.488-2.351-1.707 0-1.551 1.707-2.145 3.18-2.145 1.32 0 1.94.285 2.742.672-.235 1.863-1.836 3.18-3.57 3.18m.363-11.016c-2.172 0-4.422.957-5.356 3.078l2.664 1.11c.57-1.11 1.63-1.473 2.742-1.473 1.555 0 3.13.93 3.157 2.586v.207c-.543-.309-1.707-.777-3.13-.777-2.87 0-5.792 1.578-5.792 4.527 0 2.691 2.351 4.426 4.992 4.426 2.016 0 3.129-.906 3.828-1.969h.102v1.555h2.898V40.55c0-3.567-2.664-5.559-6.105-5.559m-18.547 2.887h-4.27v-6.895h4.27c2.246 0 3.515 1.86 3.515 3.446 0 1.562-1.27 3.449-3.515 3.449m-.078-9.691h-7.192v20.105h3v-7.617h4.192c3.328 0 6.597-2.41 6.597-6.246 0-3.836-3.27-6.243-6.597-6.243m-39.211 17.825c-2.074 0-3.813-1.735-3.813-4.117 0-2.41 1.739-4.172 3.813-4.172 2.047 0 3.652 1.761 3.652 4.172 0 2.382-1.605 4.117-3.652 4.117m3.441-9.457h-.101c-.672-.801-1.97-1.528-3.602-1.528-3.422 0-6.555 3.008-6.555 6.868 0 3.835 3.133 6.816 6.555 6.816 1.633 0 2.93-.727 3.602-1.555h.101v.98c0 2.618-1.394 4.02-3.652 4.02-1.84 0-2.98-1.324-3.445-2.437l-2.618 1.09c.75 1.812 2.746 4.039 6.063 4.039 3.523 0 6.504-2.07 6.504-7.125V35.44h-2.852v1.114zm4.926 11.738h3.008V28.187h-3.008v20.106zm7.437-6.633c-.078-2.644 2.047-3.988 3.575-3.988 1.191 0 2.203.594 2.539 1.45l-6.114 2.538zm9.329-2.281c-.57-1.527-2.305-4.352-5.86-4.352-3.52 0-6.449 2.774-6.449 6.84 0 3.836 2.902 6.844 6.789 6.844 3.137 0 4.95-1.918 5.7-3.035l-2.333-1.555c-.777 1.14-1.84 1.89-3.367 1.89s-2.617-.695-3.316-2.07l9.144-3.78-.308-.782zm-72.875-2.254v2.902h6.945c-.207 1.633-.75 2.825-1.582 3.653-1.008 1.011-2.59 2.125-5.363 2.125-4.274 0-7.618-3.446-7.618-7.72 0-4.276 3.344-7.722 7.618-7.722 2.308 0 3.992.907 5.234 2.075l2.047-2.051c-1.735-1.657-4.04-2.926-7.281-2.926-5.856 0-10.778 4.77-10.778 10.625S71.121 48.71 76.977 48.71c3.164 0 5.546-1.04 7.414-2.98 1.914-1.918 2.511-4.614 2.511-6.79a9.34 9.34 0 00-.156-1.816h-9.77zm17.82 8.887c-2.074 0-3.86-1.707-3.86-4.145 0-2.46 1.786-4.144 3.86-4.144s3.86 1.683 3.86 4.144c0 2.438-1.786 4.145-3.86 4.145m0-10.985c-3.785 0-6.867 2.875-6.867 6.84 0 3.938 3.082 6.844 6.867 6.844s6.867-2.906 6.867-6.844c0-3.965-3.082-6.84-6.867-6.84m14.98 10.985c-2.074 0-3.863-1.707-3.863-4.145 0-2.46 1.79-4.144 3.863-4.144 2.07 0 3.86 1.683 3.86 4.144 0 2.438-1.79 4.145-3.86 4.145m0-10.985c-3.785 0-6.867 2.875-6.867 6.84 0 3.938 3.082 6.844 6.867 6.844 3.782 0 6.868-2.906 6.868-6.844 0-3.965-3.086-6.84-6.868-6.84"
      />
      <path
        fill="#59C9F4"
        d="M16.973 12.184c-.47.492-.746 1.261-.746 2.257v35.54c0 .996.277 1.765.746 2.257l.117.117L37 32.445v-.468l-19.91-19.91"
      />
      <g clipPath={`url(#${id}-f)`}>
        <g clipPath={`url(#${id}-g)`}>
          <g clipPath={`url(#${id}-h)`}>
            <use y={767.891} transform="matrix(.1 0 0 -.1 36.9 115.94)" xlinkHref={`#${id}-i`} />
          </g>
        </g>
      </g>
      <g clipPath={`url(#${id}-j)`}>
        <g clipPath={`url(#${id}-k)`}>
          <g clipPath={`url(#${id}-l)`}>
            <g clipPath={`url(#${id}-m)`}>
              <use y={767.891} transform="matrix(.1 0 0 -.1 16.9 129.74)" xlinkHref={`#${id}-n`} />
            </g>
          </g>
        </g>
      </g>
      <g clipPath={`url(#${id}-o)`}>
        <g clipPath={`url(#${id}-p)`}>
          <g clipPath={`url(#${id}-q)`}>
            <g clipPath={`url(#${id}-r)`}>
              <use y={767.891} transform="matrix(.1 0 0 -.1 16.9 109.04)" xlinkHref={`#${id}-s`} />
            </g>
          </g>
        </g>
      </g>
      <text
        x={70}
        y={22}
        fill="#fff"
        stroke="null"
        strokeWidth={0}
        fontFamily="sans-serif"
        fontSize={24}
        fontWeight="bold"
        transform="translate(32.241 13.133) scale(.4815)"
      >
        Disponível na
      </text>
    </svg>
  );
}

function AppStoreIcon() {
  const id = useId();

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: 189, maxHeight: '54.63px', height: '100%', width: '100%' }}
      viewBox="0 0 217 64"
      focusable="false"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={`${id}-a`}>
          <path d="M-.761.345h217.609v65H-.762v-65zm0 0" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-a)`}>
        <path
          fill="#A7A9AB"
          d="M8.188 1.613a6.582 6.582 0 00-6.575 6.575v47.671a6.582 6.582 0 006.575 6.575h201.238A6.582 6.582 0 00216 55.859V8.187a6.582 6.582 0 00-6.574-6.574H8.188zm201.238 62.438H8.188C3.671 64.05 0 60.375 0 55.859V8.187c0-4.515 3.672-8.19 8.188-8.19h201.238c4.515 0 8.187 3.675 8.187 8.19V55.86c0 4.516-3.672 8.192-8.187 8.192"
        />
      </g>
      <path d="M209.426 63.242H8.19A7.382 7.382 0 01.81 55.86V8.187A7.382 7.382 0 018.19.806h201.235a7.382 7.382 0 017.383 7.383V55.86a7.382 7.382 0 01-7.383 7.383" />
      <path
        fill="#FFF"
        d="M48.566 31.398c-.05-5.207 4.262-7.742 4.461-7.859-2.441-3.562-6.226-4.047-7.558-4.086-3.176-.332-6.258 1.906-7.875 1.906-1.653 0-4.149-1.87-6.832-1.816-3.461.055-6.696 2.059-8.469 5.164-3.656 6.34-.93 15.652 2.578 20.777 1.758 2.508 3.805 5.313 6.488 5.211 2.625-.11 3.606-1.672 6.774-1.672 3.14 0 4.062 1.672 6.8 1.61 2.817-.047 4.59-2.52 6.282-5.055 2.031-2.875 2.844-5.707 2.875-5.851-.067-.024-5.469-2.086-5.524-8.329m-5.171-15.312c1.41-1.766 2.382-4.172 2.109-6.61-2.043.094-4.598 1.415-6.07 3.141-1.301 1.524-2.47 4.02-2.164 6.363 2.296.172 4.652-1.156 6.125-2.894M80.246 41.34l-1.812-5.598c-.192-.57-.551-1.918-1.082-4.035h-.063c-.21.91-.555 2.258-1.02 4.035l-1.78 5.598h5.757zm6.266 8.941h-3.66l-2.004-6.297h-6.961l-1.91 6.297h-3.563l6.906-21.437h4.258m21.184 13.644c0-1.508-.34-2.746-1.02-3.722-.742-1.016-1.738-1.528-2.988-1.528-.848 0-1.621.285-2.305.844-.687.566-1.14 1.3-1.355 2.215-.106.422-.156.77-.156 1.043v2.578c0 1.125.343 2.074 1.03 2.848.692.777 1.587 1.16 2.688 1.16 1.297 0 2.305-.496 3.02-1.496.726-.996 1.086-2.309 1.086-3.942m3.5-.129c0 2.63-.711 4.711-2.133 6.235-1.274 1.36-2.856 2.035-4.738 2.035-2.04 0-3.5-.734-4.391-2.195h-.063v8.144H89.5V39.91c0-1.652-.04-3.348-.125-5.09h3.02l.19 2.453h.067c1.145-1.847 2.883-2.77 5.215-2.77 1.82 0 3.348.724 4.563 2.165 1.218 1.445 1.832 3.34 1.832 5.691m14.278.129c0-1.508-.34-2.746-1.02-3.722-.743-1.016-1.739-1.528-2.989-1.528-.847 0-1.617.285-2.304.844-.692.566-1.137 1.3-1.348 2.215-.11.422-.16.77-.16 1.043v2.578c0 1.125.34 2.074 1.027 2.848.692.777 1.586 1.16 2.692 1.16 1.292 0 2.3-.496 3.019-1.496.719-.996 1.082-2.309 1.082-3.942m3.496-.129c0 2.63-.707 4.711-2.129 6.235-1.273 1.36-2.851 2.035-4.738 2.035-2.035 0-3.496-.734-4.39-2.195h-.06v8.144h-3.437V39.91c0-1.652-.043-3.348-.125-5.09h3.02l.191 2.453h.067c1.14-1.847 2.879-2.77 5.21-2.77 1.825 0 3.344.724 4.567 2.165 1.219 1.445 1.824 3.34 1.824 5.691m19.883 1.911c0 1.82-.633 3.304-1.906 4.453-1.399 1.25-3.34 1.875-5.836 1.875-2.309 0-4.16-.446-5.563-1.336l.797-2.86c1.512.91 3.164 1.364 4.969 1.364 1.293 0 2.3-.29 3.023-.871.72-.586 1.078-1.368 1.078-2.344 0-.867-.293-1.606-.886-2.2-.594-.593-1.582-1.144-2.961-1.656-3.754-1.402-5.63-3.453-5.63-6.148 0-1.762.657-3.207 1.974-4.332 1.312-1.125 3.062-1.692 5.246-1.692 1.953 0 3.574.344 4.867 1.02l-.86 2.8c-1.207-.655-2.574-.988-4.101-.988-1.211 0-2.152.297-2.828.891-.57.531-.86 1.18-.86 1.942 0 .847.325 1.546.985 2.097.57.508 1.61 1.059 3.117 1.656 1.844.743 3.2 1.61 4.07 2.606.867.996 1.305 2.238 1.305 3.723m11.352-6.872h-3.786v7.504c0 1.91.668 2.864 2.008 2.864.61 0 1.121-.051 1.524-.157l.093 2.606c-.671.258-1.566.383-2.668.383-1.355 0-2.418-.414-3.183-1.239-.762-.828-1.145-2.218-1.145-4.168v-7.793h-2.258V34.82h2.258v-2.828l3.371-1.02v3.848h3.786"
      />
      <path
        fill="#FFF"
        stroke="null"
        d="M166.79 42.535c0-1.426-.31-2.644-.927-3.668-.715-1.234-1.746-1.851-3.082-1.851-1.379 0-2.43.617-3.148 1.851-.617 1.024-.918 2.266-.918 3.735 0 1.425.3 2.644.918 3.664.742 1.234 1.781 1.851 3.12 1.851 1.31 0 2.34-.625 3.083-1.883.637-1.039.953-2.273.953-3.699m3.563-.11c0 2.376-.676 4.325-2.036 5.852-1.421 1.57-3.308 2.352-5.66 2.352-2.273 0-4.078-.754-5.426-2.258-1.343-1.504-2.015-3.402-2.015-5.691 0-2.399.691-4.36 2.082-5.883 1.387-1.531 3.258-2.293 5.61-2.293 2.269 0 4.097.754 5.472 2.258 1.316 1.468 1.973 3.351 1.973 5.664"
      />
      <path
        fill="#FFF"
        d="M181.516 37.844a5.93 5.93 0 00-1.082-.094c-1.207 0-2.145.457-2.801 1.367-.57.809-.856 1.824-.856 3.051v8.113h-3.433l.027-10.59a87.52 87.52 0 00-.125-4.87h2.992l.125 2.96h.09c.363-1.015.938-1.836 1.719-2.449.765-.55 1.594-.828 2.484-.828.317 0 .606.023.86.062m12.082 6.364c.023-1.016-.2-1.899-.664-2.64-.594-.954-1.512-1.435-2.739-1.435-1.12 0-2.035.47-2.734 1.403-.57.742-.914 1.633-1.012 2.672h7.149zm3.273.89c0 .617-.039 1.133-.121 1.559h-10.3c.034 1.527.534 2.695 1.491 3.5.868.723 1.993 1.078 3.371 1.078 1.524 0 2.915-.242 4.168-.73l.54 2.386c-1.465.633-3.192.957-5.188.957-2.395 0-4.277-.707-5.645-2.12-1.363-1.407-2.05-3.302-2.05-5.677 0-2.332.633-4.273 1.91-5.82 1.332-1.656 3.137-2.48 5.402-2.48 2.227 0 3.918.824 5.063 2.48.91 1.313 1.36 2.938 1.36 4.867"
      />
      <text
        x={77}
        y={22}
        fill="#fff"
        stroke="null"
        strokeWidth={0}
        fontFamily="sans-serif"
        fontSize={24}
        fontWeight="bold"
        transform="translate(32.241 13.133) scale(.4815)"
      >
        Disponível na
      </text>
    </svg>
  );
}

function SiteFooterStores(
  { className, title = 'Baixe o App', ...props }: Props,
  ref: ReactRef<Ref>,
) {
  const appStoreAria = useFocusRing();
  const playStoreAria = useFocusRing();

  return (
    <SiteFooterInfo
      ref={ref}
      align={{ base: 'left', md: 'center' }}
      className={cn(className, styles['site-footer-stores'])}
      {...props}
    >
      <SiteFooterInfoTitle>{title}</SiteFooterInfoTitle>
      <Flex gap={{ base: 'sm', md: 'lg' }} height="3xlg" justifyContent="space-between">
        <a
          rel="noreferrer"
          href="https://play.google.com/store/apps/details?id=br.com.agipag.app"
          target="_blank"
          className={cn(styles.action, { [styles['-focused']]: playStoreAria.isFocusVisible })}
          aria-label="Baixar o aplicativo do Agi na Google Play"
          {...playStoreAria.focusProps}
        >
          <GooglePlayIcon />
        </a>
        <a
          rel="noreferrer"
          href="https://apps.apple.com/br/app/agibank-seu-banco-digital/id1173498435"
          target="_blank"
          className={cn(styles.action, { [styles['-focused']]: appStoreAria.isFocusVisible })}
          aria-label="Baixar o aplicativo do Agi na AppStore"
          {...appStoreAria.focusProps}
        >
          <AppStoreIcon />
        </a>
      </Flex>
    </SiteFooterInfo>
  );
}

const ForwardedSiteFooterStores = forwardRef(SiteFooterStores);
ForwardedSiteFooterStores.displayName = 'SiteFooterStores';

export { ForwardedSiteFooterStores as SiteFooterStores };
export type { Props as SiteFooterStoresProps, Ref as SiteFooterStoresRef };
