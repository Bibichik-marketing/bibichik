"use client";
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import {copy,localeFromPath} from '@/lib/i18n';

export function LanguageChrome(){const locale=localeFromPath(usePathname());useEffect(()=>{document.documentElement.lang=locale},[locale]);return <a className="skip-link" href="#main">{copy[locale].common.skip}</a>}
