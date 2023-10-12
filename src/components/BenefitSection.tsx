import {
  BanknotesIcon,
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const benefits = [
  {
    name: 'Save Time',
    description:
      'Autem reprehenderit aut debitis ut. Officiis harum omnis placeat blanditiis delectus sint vel et voluptatum. Labore asperiores non corporis molestiae.',
    icon: ClockIcon,
  },
  {
    name: 'Save Money',
    description:
      'Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat. Voluptatem officiis necessitatibus est.',
    icon: BanknotesIcon,
  },
  {
    name: 'Find the right people',
    description:
      'Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. Ut et sunt id officiis vitae perspiciatis. Et accusantium sapiente.',
    icon: UsersIcon,
  },
  {
    name: 'Hire with confidence',
    description:
      'Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.',
    icon: ShieldCheckIcon,
  },
];

export default function BenefitSection() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Stay on top of customer support
          </h2>
          <dl className='col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2'>
            {benefits.map((benefit) => (
              <div key={benefit.name}>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  <div className='bg-primary-600/60 mb-6 flex h-10 w-10 items-center justify-center rounded-lg'>
                    <benefit.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {benefit.name}
                </dt>
                <dd className='mt-1 text-base leading-7 text-gray-600'>
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
