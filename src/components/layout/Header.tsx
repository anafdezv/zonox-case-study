import BaseLogo from '@/assets/logo.svg';
import MiniLogo from '@/assets/logo_mini.svg';

export const Header = ({ actions }: { actions?: JSX.Element }) => {
    return (
        <div className="w-full bg-white px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <div className="w-30 hidden md:flex">
                <BaseLogo />
            </div>
            <div className="flex md:hidden h-10 w-10">
                <MiniLogo />
            </div>
            {actions}
        </div>
    );
};
