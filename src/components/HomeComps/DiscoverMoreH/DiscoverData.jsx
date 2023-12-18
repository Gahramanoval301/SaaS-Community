import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReportIcon from '@mui/icons-material/Report';
import styles from './index.module.css'
export const discoverData = [{
    id: 0,
    title: 'Sales Tracking',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    icon: <SignalCellularAltIcon className={styles.icon} />
}, {
    id: 1,
    title: 'Project Management',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    icon: <ManageAccountsIcon className={styles.icon} />
}, {
    id: 2,
    title: 'Activity Report',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    icon: <ReportIcon className={styles.icon} />
}]