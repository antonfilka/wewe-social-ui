import { Rate as RateAnt, RateProps } from 'antd';
import styles from '../Rating/styles.module.css'; // Импортируй как модуль

interface RatingProps extends RateProps {
    isReadonly?: boolean;
    defaultValue?: number;
}

export const Rate = ({ isReadonly, defaultValue, ...props }: RatingProps) => {
    return (
        <RateAnt
            allowHalf
            defaultValue={defaultValue}
            disabled={isReadonly}
            {...props}
            className={styles.ratingStyles}
        />
    );
};
