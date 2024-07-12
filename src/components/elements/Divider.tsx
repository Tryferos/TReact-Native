import {FC} from 'react';
import {Row} from './Row';

type DividerProps = {
  space?: number;
  paddingToCancelOuterSpacing?: number;
};

export const Divider: FC<DividerProps> = ({
  space = 16,
  paddingToCancelOuterSpacing = 16,
}) => {
  return (
    <Row
      style={{
        marginTop: space / 2,
        marginBottom: space,
        marginHorizontal: -paddingToCancelOuterSpacing,
      }}
      className="h-[1px] bg-gray-300 w-[100vw]"
    />
  );
};
