import React, { useState } from 'react';
import { NAV_LINKS, WHATSAPP_LINK } from '../constants';
// Prefer serving logo from public/images with base awareness (works on GitHub Pages)
const BASE = (import.meta as any).env?.BASE_URL || '/';
const primaryLogoSrc = `${BASE}images/logo.png`;

const logoSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVsAAABCCAYAAABhchT1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA5CSURBVHhe7Z1/aJVVGMev3/uSFdNuW2sraUu6wLahDdpQW3UrtC3bJcnPyGUYWwoiWtneIGj5j2xZSjQVRKIgIv/YYhkWQrjVyLLZandfnHuXcz/n/J57z3vPvef0+dznXM6cOTO/zMx7/nmeM9f8mZBYLBaLdVkcFst1WSwWi3VZLBaLdVmMt5D+7e18Def/P7+t7V8+4ic2P+In9o74Sf1dn9g94if2fMRPbPnP39/2v/Iv4if2fMRPbB/xE/s64if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4if2fMRPbB/xE/s+4-iJ/YPeIn9-iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9n3ET+z5iJ/YPeIn9...-iJ/YPe-iJ/";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [logoFailed, setLogoFailed] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-black bg-opacity-30 backdrop-blur-sm z-50 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="relative flex items-center justify-between h-[76px] md:h-[108px]">
                    
                    {/* Desktop: Absolute positioning for a 3-part layout */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex-shrink-0 hidden md:block">
                                                                        <a href="/" aria-label="Anasayfa">
                                                                                                                                                                                                                                                        <img
                                                                                                                                                                                                                                                            className="h-[60px] md:h-[80px] lg:h-[100px] w-auto drop-shadow-md"
                                                            src={logoFailed ? logoSrc : primaryLogoSrc}
                                                            onError={() => setLogoFailed(true)}
                                                            alt="CAN LED Logo"
                                                        />
                        </a>
                    </div>

                    <nav className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center space-x-6">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-slate-200 hover:text-white transition-colors text-base font-medium">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 flex-shrink-0">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                        >
                            Teklif Al
                        </a>
                    </div>
                    
                    {/* Mobile: justify-between places logo and menu button */}
                    <div className="flex-1 flex items-center justify-between md:hidden">
                                                                        <a href="/" aria-label="Anasayfa">
                                                                                                                                                                                                                                                        <img
                                                                                                                                                                                                                                                            className="h-[60px] md:h-[80px] lg:h-[100px] w-auto drop-shadow-md"
                                                            src={logoFailed ? logoSrc : primaryLogoSrc}
                                                            onError={() => setLogoFailed(true)}
                                                            alt="CAN LED Logo"
                                                        />
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-200 hover:text-white focus:outline-none"
                            aria-label="Menüyü aç"
                        >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Dropdown */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-slate-800/95 backdrop-blur-md`}>
                <ul className="flex flex-col items-center py-4 space-y-4">
                    {NAV_LINKS.map(link => (
                        <li key={link.name}>
                            <a href={link.href} onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-white transition-colors text-lg font-medium">
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className="pt-2">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                        >
                            Teklif Al
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;