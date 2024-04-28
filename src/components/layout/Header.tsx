import BaseLogo from '@/assets/logo.svg';

export const Header = ({ actions }: { actions?: JSX.Element }) => {
    return (
        <div className="w-full bg-white px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <BaseLogo />
            {actions}
        </div>
    );
};
