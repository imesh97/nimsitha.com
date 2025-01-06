import React from 'react';
import { FileJson, FileText, FileCode } from 'lucide-react';

interface FileIconProps {
  filename: string;
  className?: string;
}

export function FileIcon({ filename, className = '' }: FileIconProps) {
  const extension = filename.split('.').pop()?.toLowerCase();

  switch (extension) {
    case 'json':
      return <FileJson className={`text-[#CBB89B] ${className}`} />;
    case 'tsx':
    case 'ts':
      return <FileCode className={`text-[#519ABA] ${className}`} />;
    default:
      return <FileText className={`text-[#519ABA] ${className}`} />;
  }
}