import React, { useState, useRef, useLayoutEffect } from 'react';
import XDataSpreadSheet, { Options, SheetData } from 'x-data-spreadsheet';

interface SpreadSheetProps {
  data: SheetData[];
  options?: Options;
  className?: string;
}

export default function XDataSpreadSheetComponent({
  data,
  options,
  className
}: SpreadSheetProps) {
  const [xDataSpreadSheet, setXDataSpreadSheet] = useState<XDataSpreadSheet>();
  const container = useRef<HTMLDivElement>();
  useLayoutEffect(() => {
    setXDataSpreadSheet(new XDataSpreadSheet(container.current, options));
  }, []); // only to initialize the spreadsheet once.
  useLayoutEffect(() => {
    xDataSpreadSheet.loadData(data);
  }, [data]);
  return <div ref={container} className={className}></div>;
}
