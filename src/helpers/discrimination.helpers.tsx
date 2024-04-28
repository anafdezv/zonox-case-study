import { SEASON_DISCRIMINATION, TIME_DISCRIMINATION } from '@/enums';
import { BsArrowRepeat, BsSunrise } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { HiCalendar } from 'react-icons/hi';
import { IoIosSnow } from 'react-icons/io';
import { IoMoonOutline } from 'react-icons/io5';
import { LuSunSnow } from 'react-icons/lu';
import { MdOutlineWeekend } from 'react-icons/md';

export const ConsumeMomentString: { [key in TIME_DISCRIMINATION]: string } = {
    [TIME_DISCRIMINATION.MORNING]: 'Por la mañana',
    [TIME_DISCRIMINATION.AFTERNOON]: 'Por la tarde',
    [TIME_DISCRIMINATION.NIGHT]: 'Por la noche',
    [TIME_DISCRIMINATION.SAME_ALL_DAY]: 'Todo el día',
    [TIME_DISCRIMINATION.WEEKENDS]: 'Fines de semana',
};

export const ConsumeMomentIcons: { [key in TIME_DISCRIMINATION]: JSX.Element } = {
    [TIME_DISCRIMINATION.MORNING]: <BsSunrise />,
    [TIME_DISCRIMINATION.AFTERNOON]: <FiSun />,
    [TIME_DISCRIMINATION.NIGHT]: <IoMoonOutline />,
    [TIME_DISCRIMINATION.SAME_ALL_DAY]: <BsArrowRepeat />,
    [TIME_DISCRIMINATION.WEEKENDS]: <MdOutlineWeekend />,
};

export const SeasonString: { [key in SEASON_DISCRIMINATION]: string } = {
    [SEASON_DISCRIMINATION.SUMMER]: 'Verano',
    [SEASON_DISCRIMINATION.WINTER]: 'Invierno',
    [SEASON_DISCRIMINATION.SUMMER_AND_WINTER]: 'Verano e Invierno',
    [SEASON_DISCRIMINATION.SAME_ALL_YEAR]: 'Todo el año',
};

export const SeasonIcons: { [key in SEASON_DISCRIMINATION]: JSX.Element } = {
    [SEASON_DISCRIMINATION.SUMMER]: <FiSun />,
    [SEASON_DISCRIMINATION.WINTER]: <IoIosSnow />,
    [SEASON_DISCRIMINATION.SUMMER_AND_WINTER]: <LuSunSnow />,
    [SEASON_DISCRIMINATION.SAME_ALL_YEAR]: <HiCalendar />,
};
