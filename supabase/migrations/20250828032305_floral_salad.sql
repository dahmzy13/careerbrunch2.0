/*
  # Create Content Management Tables

  1. New Tables
    - `about_us_content`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `link_url` (text, optional)
      - `order_index` (integer)
      - `is_active` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `speakers`
      - `id` (uuid, primary key)
      - `name` (text)
      - `title` (text)
      - `organization` (text)
      - `bio` (text, optional)
      - `image_url` (text)
      - `category` (text) - 'host', 'speaker', 'mentor'
      - `order_index` (integer)
      - `is_active` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `partners`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text, optional)
      - `logo_url` (text)
      - `website_url` (text, optional)
      - `category` (text) - 'sponsor', 'talent_partner', 'community_partner', 'media_partner'
      - `order_index` (integer)
      - `is_active` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `past_events`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `event_date` (date)
      - `stats` (jsonb) - for storing event statistics
      - `order_index` (integer)
      - `is_active` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text)
      - `role` (text)
      - `company` (text, optional)
      - `quote` (text)
      - `image_url` (text)
      - `rating` (integer, 1-5)
      - `order_index` (integer)
      - `is_active` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated admin write access
*/

-- Create about_us_content table
CREATE TABLE IF NOT EXISTS about_us_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  link_url text,
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create speakers table
CREATE TABLE IF NOT EXISTS speakers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text NOT NULL,
  organization text NOT NULL,
  bio text,
  image_url text NOT NULL,
  category text NOT NULL CHECK (category IN ('host', 'speaker', 'mentor')),
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create partners table
CREATE TABLE IF NOT EXISTS partners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  logo_url text NOT NULL,
  website_url text,
  category text NOT NULL CHECK (category IN ('sponsor', 'talent_partner', 'community_partner', 'media_partner')),
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create past_events table
CREATE TABLE IF NOT EXISTS past_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  event_date date NOT NULL,
  stats jsonb DEFAULT '{}',
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  company text,
  quote text NOT NULL,
  image_url text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE about_us_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE speakers ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE past_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to about_us_content"
  ON about_us_content
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Allow public read access to speakers"
  ON speakers
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Allow public read access to partners"
  ON partners
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Allow public read access to past_events"
  ON past_events
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Allow public read access to testimonials"
  ON testimonials
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Create policies for authenticated admin write access
CREATE POLICY "Allow authenticated users to manage about_us_content"
  ON about_us_content
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to manage speakers"
  ON speakers
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to manage partners"
  ON partners
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to manage past_events"
  ON past_events
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to manage testimonials"
  ON testimonials
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_about_us_content_active_order ON about_us_content (is_active, order_index);
CREATE INDEX IF NOT EXISTS idx_speakers_category_active_order ON speakers (category, is_active, order_index);
CREATE INDEX IF NOT EXISTS idx_partners_category_active_order ON partners (category, is_active, order_index);
CREATE INDEX IF NOT EXISTS idx_past_events_active_order ON past_events (is_active, order_index);
CREATE INDEX IF NOT EXISTS idx_testimonials_active_order ON testimonials (is_active, order_index);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_about_us_content_updated_at BEFORE UPDATE ON about_us_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_speakers_updated_at BEFORE UPDATE ON speakers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_partners_updated_at BEFORE UPDATE ON partners FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_past_events_updated_at BEFORE UPDATE ON past_events FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();