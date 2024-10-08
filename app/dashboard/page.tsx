import styles from './styles.module.css';
import { BaseButton } from '@/src/components/common/Buttons';
import { SearchInput } from '@/src/components/common/Inputs/SearchInput';
import { Rate } from '@/src/components/common/Rating/Rate';

export default function DashboardPage() {
    return (
        <section className={styles.dashboard}>
            <BaseButton buttonType="success">Click me</BaseButton>
            <SearchInput />
            <Rate />
        </section>
    );
}
