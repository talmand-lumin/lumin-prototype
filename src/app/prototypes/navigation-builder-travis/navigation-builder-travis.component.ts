import { Component } from '@angular/core';
import { Tab } from '@a3-digital/ui-core';
import { RadioButtonCardOption } from '@a3-digital/ui-workflows';

// Mirrors ui-management's TreeViewListItem shape (that class isn't exported from the
// package public-api, so we declare a structurally-compatible interface here).
interface NavItem {
    id: string;
    title: string;
    icon?: string;
    children?: NavItem[];
}

@Component({
    standalone: false,
    selector: 'app-navigation-builder',
    templateUrl: './navigation-builder-travis.component.html',
    styleUrls: ['./navigation-builder-travis.component.scss']
})
export class NavigationBuilderComponent {
    public tabs: Tab[] = [
        { label: 'Navigation Menu', value: 'navigation' },
        { label: 'Profile Menu', value: 'profile' },
        { label: 'Layout Style', value: 'layout' }
    ];
    public selectedTab = 'navigation';

    public navItems: NavItem[] = [
        {
            id: 'accounts',
            title: 'Accounts',
            icon: 'account_balance',
            children: [
                { id: 'account-summary', title: 'Account Summary' },
                { id: 'statements', title: 'Statements' },
                { id: 'documents', title: 'Documents' }
            ]
        },
        {
            id: 'send-pay',
            title: 'Send & Pay',
            icon: 'swap_horiz',
            children: [
                {
                    id: 'transfers',
                    title: 'Transfers',
                    icon: 'swap_horiz',
                    children: [
                        { id: 'transfer-money', title: 'Transfer Money' },
                        { id: 'transfer-activity', title: 'Transfer Activity' },
                        { id: 'linked-external-accounts', title: 'Linked External Accounts' },
                        { id: 'linked-member-accounts', title: 'Linked Member Accounts' }
                    ]
                },
                {
                    id: 'payments',
                    title: 'Payments',
                    icon: 'credit_card',
                    children: [
                        { id: 'pay-a-bill', title: 'Pay a Bill' },
                        { id: 'payment-activity', title: 'Payment Activity' },
                        { id: 'manage-payees', title: 'Manage Payees' }
                    ]
                },
                {
                    id: 'wires',
                    title: 'Wires',
                    icon: 'sync_alt',
                    children: [
                        { id: 'send-a-wire', title: 'Send a Wire' },
                        { id: 'wire-activity', title: 'Wire Activity' },
                        { id: 'wire-templates', title: 'Wire Templates' }
                    ]
                },
                {
                    id: 'deposits',
                    title: 'Deposits',
                    icon: 'savings',
                    children: [
                        { id: 'mobile-deposit', title: 'Mobile Deposit' },
                        { id: 'deposit-history', title: 'Deposit History' }
                    ]
                }
            ]
        },
        {
            id: 'bill-pay',
            title: 'Bill Pay',
            icon: 'receipt_long',
            children: [
                { id: 'payees', title: 'Payees' },
                { id: 'ebills', title: 'eBills' },
                { id: 'payment-history', title: 'Payment History' }
            ]
        },
        {
            id: 'financial-wellness',
            title: 'Financial Wellness',
            icon: 'location_on',
            children: [
                { id: 'budgets', title: 'Budgets' },
                { id: 'credit-score', title: 'Credit Score' },
                { id: 'goals', title: 'Goals' }
            ]
        },
        {
            id: 'messages',
            title: 'Messages',
            icon: 'mail',
            children: [
                { id: 'inbox', title: 'Inbox' },
                { id: 'sent', title: 'Sent' },
                { id: 'compose', title: 'Compose' }
            ]
        },
        {
            id: 'products-offers',
            title: 'Products & Offers',
            icon: 'sell',
            children: [
                { id: 'credit-cards', title: 'Credit Cards' },
                { id: 'loans', title: 'Loans' },
                { id: 'promotions', title: 'Promotions' }
            ]
        }
    ];

    public profileNavItems: NavItem[] = [
        {
            id: 'message-center',
            title: 'Message Center',
            icon: 'mail',
            children: [
                { id: 'inbox', title: 'Inbox' },
                { id: 'archived', title: 'Archived' }
            ]
        },
        {
            id: 'profile-security',
            title: 'Profile Security',
            icon: 'verified_user',
            children: [
                { id: 'password', title: 'Password' },
                { id: 'two-factor', title: 'Two-Factor Authentication' },
                { id: 'devices', title: 'Devices' }
            ]
        },
        {
            id: 'alerts',
            title: 'Alerts',
            icon: 'notifications',
            children: [
                { id: 'alert-preferences', title: 'Alert Preferences' },
                { id: 'alert-history', title: 'Alert History' }
            ]
        },
        {
            id: 'documents-reports',
            title: 'Documents & Reports',
            icon: 'description',
            children: [
                { id: 'statements', title: 'Statements' },
                { id: 'tax-documents', title: 'Tax Documents' },
                { id: 'reports', title: 'Reports' }
            ]
        },
        {
            id: 'account-services',
            title: 'Account Services',
            icon: 'account_balance_wallet',
            children: [
                { id: 'order-checks', title: 'Order Checks' },
                { id: 'stop-payment', title: 'Stop Payment' },
                { id: 'account-details', title: 'Account Details' }
            ]
        }
    ];

    public desktopLayoutOptions: RadioButtonCardOption<string>[] = [
        this.layoutOption('horizontal', 'Horizontal Navigation', 'Top bar navigation', true),
        this.layoutOption('side', 'Side Navigation', 'Vertical left rail navigation')
    ];

    public mobileLayoutOptions: RadioButtonCardOption<string>[] = [
        this.layoutOption('bottom-sheet', 'Bottom Sheet', 'Bottom tab bar navigation', true),
        this.layoutOption('mega-menu', 'Mega Menu', 'Full screen overlay navigation')
    ];

    public bottomNavOptions: RadioButtonCardOption<string>[] = [
        this.layoutOption('attached', 'Attached', 'Fixed to the bottom of the screen', true),
        this.layoutOption('floating', 'Floating', 'Elevated at the bottom of the screen')
    ];

    public onTabSelected(value: string): void {
        this.selectedTab = value;
    }

    public onAddItem(): void {
        // Visual demo only.
    }

    public onSave(): void {
        // Visual demo only.
    }

    public onCancel(): void {
        // Visual demo only.
    }

    public onLayoutChanged(): void {
        // Visual demo only.
    }

    private layoutOption(id: string, label: string, description: string, isDefault = false): RadioButtonCardOption<string> {
        const option = new RadioButtonCardOption<string>();
        option.id = id;
        option.label = label;
        option.description = description;
        option.isDefault = isDefault;
        option.content = `${label} preview`;
        return option;
    }
}
