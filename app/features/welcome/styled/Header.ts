
import styled from 'styled-components';

import uniLogo from '../../../images/uni-logo_schrift.png';

/**
 * The logo lockup (3736 x 720 px) has an aspect ratio of ~5.19:1 and gets a
 * dedicated, centered top band:
 *   1.5em - breathing room between the window edge and the logo
 *   width / 5.19 - rendered logo height
 *   1.5em - gap between the logo and the form content
 * `padding-top` mirrors exactly those values, so the form always starts
 * below the logo at any window width (min 480 px, resizable; in full screen
 * the logo grows with the window up to the 340 px cap, keeping the top band
 * proportional).
 */
export default styled.div`
    background-image: url(${uniLogo});
    background-position: center 1.5em;
    background-repeat: no-repeat;
    background-size: min(66%, 340px) auto;
    align-items: center;
    display: flex;
    margin: 0 auto;
    padding-bottom: 3em;
    padding-top: calc(min(66%, 340px) / 5.19 + 1.5em + 1.5em);
`;
