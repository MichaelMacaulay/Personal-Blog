import React from 'react';
import { globals } from '../globals';

export const Header: React.FC = () => (
  <div className="header">
    <a href="/">{globals.siteName}</a>
    <div className="flex-spacer" />
    <a href="/services">Services</a>
    {/* <a href="https://github.com/colinhacks/devii">About me</a> */}
    <a href="/essays">Essays</a>
    <a href="https://www.youtube.com/channel/UCvRY4unLTEOkOKFEszQnlWg">Videos</a>
    {/* Service brainstorming ideas
    -Smart contract review or create
    -Create video
    -Write copy */}
  </div>
);
