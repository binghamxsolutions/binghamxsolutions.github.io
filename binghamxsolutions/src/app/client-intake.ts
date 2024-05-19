export interface ClientIntake {
	name: string | null;
	email: string | null;
	reason: string | null;
	business_name: string | null;
	services: string[] | null;
	notes: string | null;
	timeframe: string | null;
	budget: number | null;
}
