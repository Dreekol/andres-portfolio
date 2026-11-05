// Single source of truth for personal details.
// TODO(Andrés): replace the placeholder email, LinkedIn and resume before launch.
export const site = {
  name: 'Andrés Velasco',
  role: 'Senior UX/UI & Brand Designer',
  location: 'Saint Paul, MN',
  email: 'hello@example.com',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  resumePdf: '/andres-velasco-resume.pdf',
  openTo: 'Open to senior product, design lead and UX + brand roles',
  description:
    'Andrés Velasco is a senior UX/UI and brand designer in Saint Paul, MN, helping teams make complicated things feel simple, from identity to interface.',
};

export const domains = ['Healthcare', 'Insurance', 'Agriculture', 'Public sector', 'Manufacturing', 'HR & Learning'] as const;

export const workTypes = ['Customer-facing products', 'Internal tools', 'Websites', 'Design systems', 'Brand identity', 'Data visualization', 'Research'] as const;
