'use client';

import { useState } from 'react';

const investmentOptions = [
  '$10,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000 and above',
];

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    investment: '',
    experience: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setStatus('Application service is not configured yet.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus(
        'Application submitted successfully. Our team will contact you.',
      );
      setForm({
        name: '',
        email: '',
        phone: '',
        country: '',
        investment: '',
        experience: '',
        message: '',
      });
    } catch {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#062c2a] text-white overflow-hidden">
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-7 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl md:text-3xl font-bold tracking-tight"
        >
          Crypto <span className="text-[#e9bd59]">Range</span>
        </a>

        <a
          href="#apply"
          className="bg-[#e9bd59] text-[#062c2a] px-5 py-3 rounded-lg font-bold text-sm hover:bg-white transition"
        >
          Apply Now
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 border border-[#e9bd59]/40 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#e9bd59]"></span>
            <span className="text-[#e9bd59] text-sm font-medium">
              PRIVATE INVESTMENT OPPORTUNITY
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight">
            A Smarter Way to
            <span className="text-[#e9bd59]"> Approach Crypto</span>
            Investment.
          </h1>

          <p className="text-gray-300 text-lg leading-8 mt-7 max-w-xl">
            Access specialized cryptocurrency trading insights,
            strategic market analysis and a private investment
            opportunity designed for a select group of investors.
          </p>

          <div className="mt-9 border border-[#e9bd59] rounded-xl p-5 md:p-6 max-w-xl">
            <p className="text-[#e9bd59] font-semibold text-sm uppercase tracking-wider">
              Advertised investment target
            </p>

            <div className="flex flex-wrap items-end gap-3 mt-2">
              <span className="text-5xl md:text-6xl font-bold text-[#e9bd59]">
                50%
              </span>
              <span className="text-xl md:text-2xl pb-2">
                Projected Return Target
              </span>
            </div>

            <p className="text-gray-400 text-sm mt-2">
              Over a six-month investment period. Returns are not
              guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="flex gap-3 items-center">
              <div className="text-[#e9bd59] text-3xl">◷</div>
              <div>
                <p className="text-gray-400 text-sm">
                  Investment Period
                </p>
                <p className="font-semibold">6 Months</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="text-[#e9bd59] text-3xl">♙</div>
              <div>
                <p className="text-gray-400 text-sm">
                  Investor Places
                </p>
                <p className="font-semibold">Maximum of 5</p>
              </div>
            </div>
          </div>

          <a
            href="#apply"
            className="inline-block mt-10 bg-[#e9bd59] text-[#062c2a] px-9 py-4 rounded-lg font-bold hover:bg-white transition"
          >
            Request an Invitation →
          </a>

          <p className="text-gray-500 text-xs mt-5 max-w-lg">
            Applications are subject to review and eligibility checks.
            Submission does not guarantee acceptance.
          </p>
        </div>

        {/* HERO GRAPHIC */}
        <div className="relative flex justify-center items-center min-h-[400px] md:min-h-[550px]">
          <div className="absolute w-[350px] h-[350px] md:w-[480px] md:h-[480px] rounded-full border border-[#e9bd59]/20"></div>
          <div className="absolute w-[270px] h-[270px] md:w-[370px] md:h-[370px] rounded-full border border-[#e9bd59]/20"></div>

          <div className="relative z-10 text-center">
            <div className="flex justify-center items-center gap-4">
              <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#f5d77c] via-[#d9a83e] to-[#8d6420] flex items-center justify-center shadow-2xl border-8 border-[#e9bd59]/20">
                <span className="text-6xl md:text-8xl font-bold text-[#062c2a]">
                  ₿
                </span>
              </div>

              <div className="space-y-3">
                <div className="w-24 h-7 rounded-full bg-gradient-to-r from-[#b58b35] to-[#f4d77e]"></div>
                <div className="w-28 h-7 rounded-full bg-gradient-to-r from-[#b58b35] to-[#f4d77e]"></div>
                <div className="w-32 h-7 rounded-full bg-gradient-to-r from-[#b58b35] to-[#f4d77e]"></div>
              </div>
            </div>

            <div className="mt-12">
              <div className="text-8xl md:text-9xl text-[#e9bd59] font-bold">
                ↗
              </div>
              <p className="text-[#e9bd59] font-bold text-xl tracking-widest">
                THINK STRATEGICALLY
              </p>
              <p className="text-gray-400 mt-2">
                Navigate the crypto market with insight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE OPPORTUNITY */}
      <section className="bg-[#082320] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#e9bd59] uppercase tracking-[3px] text-sm font-semibold">
              Exclusivity by Design
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              Not Every Opportunity Is Meant for Everyone.
            </h2>

            <p className="text-gray-400 leading-8 mt-6">
              Crypto Range focuses on a selective investment approach.
              Rather than opening the opportunity to a large audience,
              we intend to work with a small group of qualified
              investors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="border border-white/10 bg-[#0b302c] p-8 rounded-2xl">
              <div className="text-4xl text-[#e9bd59] mb-6">01</div>
              <h3 className="text-xl font-bold">Selective Access</h3>
              <p className="text-gray-400 mt-4 leading-7">
                Applications are reviewed individually. Only eligible
                investors may be invited to proceed.
              </p>
            </div>

            <div className="border border-white/10 bg-[#0b302c] p-8 rounded-2xl">
              <div className="text-4xl text-[#e9bd59] mb-6">02</div>
              <h3 className="text-xl font-bold">
                Market Intelligence
              </h3>
              <p className="text-gray-400 mt-4 leading-7">
                Access specialized trading information, market
                analysis and insights into potential cryptocurrency
                opportunities.
              </p>
            </div>

            <div className="border border-white/10 bg-[#0b302c] p-8 rounded-2xl">
              <div className="text-4xl text-[#e9bd59] mb-6">03</div>
              <h3 className="text-xl font-bold">
                Limited Participation
              </h3>
              <p className="text-gray-400 mt-4 leading-7">
                The proposed investment program is limited to a
                maximum of five participating investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT DETAILS */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <p className="text-[#e9bd59] uppercase tracking-[3px] text-sm">
            The Investment Framework
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Six Months. One Strategic Plan.
          </h2>
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A proposed six-month investment program with a clearly
            defined participation period.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <div className="bg-[#0b3530] border border-white/10 rounded-2xl p-8">
            <p className="text-gray-400">Investment Begins</p>
            <h3 className="text-3xl font-bold text-[#e9bd59] mt-4">
              December
            </h3>
            <p className="text-white mt-2">2026</p>
          </div>

          <div className="bg-[#0b3530] border border-white/10 rounded-2xl p-8">
            <p className="text-gray-400">Investment Duration</p>
            <h3 className="text-3xl font-bold text-[#e9bd59] mt-4">
              6 Months
            </h3>
            <p className="text-white mt-2">
              Defined investment period
            </p>
          </div>

          <div className="bg-[#0b3530] border border-white/10 rounded-2xl p-8">
            <p className="text-gray-400">Investment Ends</p>
            <h3 className="text-3xl font-bold text-[#e9bd59] mt-4">
              May
            </h3>
            <p className="text-white mt-2">2027</p>
          </div>
        </div>

        <div className="mt-8 p-7 rounded-2xl border border-[#e9bd59]/30 bg-[#e9bd59]/5 flex flex-col md:flex-row justify-between gap-5 items-center">
          <div>
            <h3 className="font-bold text-xl">
              Proposed Investor Allocation
            </h3>
            <p className="text-gray-400 mt-2">
              Maximum of five investor places available, subject to
              approval.
            </p>
          </div>
          <div className="text-5xl font-bold text-[#e9bd59]">05</div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#082320] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <p className="text-[#e9bd59] uppercase tracking-[3px] text-sm">
              Getting Started
            </p>
            <h2 className="text-4xl font-bold mt-5">
              How to Get Considered
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {[
              {
                number: '01',
                title: 'Submit Your Application',
                text: 'Complete the private investor application form with your contact information and intended investment range.',
              },
              {
                number: '02',
                title: 'Application Review',
                text: 'Our team will review your information and assess your eligibility for the proposed program.',
              },
              {
                number: '03',
                title: 'Private Consultation',
                text: 'If selected, our team will contact you to discuss the strategy, terms, risks and next steps.',
              },
            ].map((item) => (
              <div key={item.number} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full border border-[#e9bd59] text-[#e9bd59] flex items-center justify-center text-2xl font-bold">
                  {item.number}
                </div>
                <h3 className="text-xl font-bold mt-6">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-7 mt-4">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#e9bd59] uppercase tracking-[3px] text-sm font-semibold">
              Private Investor Application
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              Request Your Invitation.
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Interested in learning more about Crypto Range? Complete
              the application below and our team will contact you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#0b3530] border border-white/10 rounded-2xl p-6 md:p-10 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">
                  Full Name *
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={updateForm}
                  placeholder="Enter your full name"
                  className="w-full bg-[#062c2a] border border-white/15 rounded-lg px-4 py-4 outline-none focus:border-[#e9bd59]"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateForm}
                  placeholder="you@example.com"
                  className="w-full bg-[#062c2a] border border-white/15 rounded-lg px-4 py-4 outline-none focus:border-[#e9bd59]"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={updateForm}
                  placeholder="+1 000 000 0000"
                  className="w-full bg-[#062c2a] border border-white/15 rounded-lg px-4 py-4 outline-none focus:border-[#e9bd59]"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Country *
                </label>
                <input
                  required
                  name="country"
                  value={form.country}
                  onChange={updateForm}
                  placeholder="Your country"
                  className="w-full bg-[#062c2a] border border-white/15 rounded-lg px-4 py-4 outline-none focus:border-[#e9bd59]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">
                How Much Are You Willing to Invest? *
              </label>

              <select
                required
                name="investment"
                value={form.investment}
                onChange={updateForm}
                className="w-full bg-[#062c2a] border border-white/15 rounded-lg px-4 py-4 outline-none focus:border-[#e9bd59] text-white"
              >
                <option value="">Select Investment Range</option>
                {investmentOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">
                Previous Crypto Investment Experience
              </label>

              <select
                name="experience"
                value={form.experience}
                onChange={updateForm}
                className="w-full bg-[#062c2a] border border-white/15 rounded-lg px-4 py-4 outline-none focus:border-[#e9bd59]"
              >
                <option value="">Select an option</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Experienced">Experienced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={updateForm}
                rows={4}
                placeholder="Tell us anything else we should know..."
                className="w-full bg-[#062c2a] border border-white/15 rounded-lg px-4 py-4 outline-none focus:border-[#e9bd59] resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                required
                id="risk"
                className="mt-1 accent-[#e9bd59]"
              />
              <label
                htmlFor="risk"
                className="text-gray-400 text-sm leading-6"
              >
                I understand that cryptocurrency investments involve
                substantial risk, including possible loss of capital,
                and that projected returns are not guaranteed.
              </label>
            </div>

            {status && (
              <p
                aria-live="polite"
                className="text-[#e9bd59] text-sm"
              >
                {status}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#e9bd59] text-[#062c2a] py-5 rounded-lg font-bold text-lg hover:bg-white transition disabled:opacity-50"
            >
              {loading
                ? 'Submitting Application...'
                : 'Submit Investor Application →'}
            </button>

            <p className="text-gray-500 text-xs text-center">
              Your information will be used to review your application
              and contact you about this opportunity.
            </p>
          </form>
        </div>
      </section>

      {/* RISK DISCLOSURE */}
      {/* <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="border border-[#e9bd59]/20 rounded-xl p-7 bg-[#082320]">
          <h3 className="text-[#e9bd59] font-bold mb-3">
            Important Investment Risk Disclosure
          </h3>
          <p className="text-gray-400 text-sm leading-7">
            Cryptocurrency trading and investment involve substantial
            financial risks. The advertised 50% return is a target or
            projection, not a promise or guarantee. Actual results may
            differ significantly, and investors may lose some or all
            of their invested capital. Investment terms, custody,
            fees, withdrawal arrangements and eligibility should be
            disclosed and agreed upon before any funds are
            transferred. This opportunity is subject to applicable
            laws and regulatory requirements.
          </p>
        </div>
      </section> */}

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
          <a href="#" className="text-2xl font-bold">
            Crypto <span className="text-[#e9bd59]">Range</span>
          </a>

          <p className="text-gray-500 text-sm text-center">
            © 2026 Crypto Range. All rights reserved.
          </p>

          <a
            href="#apply"
            className="text-[#e9bd59] text-sm hover:text-white"
          >
            Investor Enquiries
          </a>
        </div>
      </footer>
    </main>
  );
}

// export default App;
