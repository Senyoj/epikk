import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Student Project",
    desc: "",
  });
  const [status, setStatus] = useState("idle");

  const projectTypes = [
    "Student Project",
    "Prototype",
    "Consultancy",
    "Training",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 2000);
  };

  if (status === "success") {
    return (
      <section
        data-theme="light"
        className="px-6 py-40 min-h-screen bg-white flex items-center justify-center text-center"
      >
        <div className="max-w-2xl animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">
            Request Logged.
          </h2>
          <p className="text-zinc-500 text-xl font-medium mb-10">
            We review all technical submissions within 24 hours. Await next
            steps in your inbox.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="text-emerald-600 font-mono font-bold uppercase tracking-widest hover:underline"
          >
            Log Another Entry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      data-theme="light"
      className="px-6 py-32 md:px-16 lg:px-24 min-h-screen bg-white transition-all duration-1000 text-center flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        {/* Header: Centered */}
        <div className="mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-8 text-emerald-600">
            <span className="w-2 h-2 bg-current" />
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase font-mono">
              Contact Protocol
            </h2>
          </div>

          <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-10">
            Design & Build <br />
            <span className="text-zinc-300">Properly.</span>
          </h3>

          <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Have a project idea or a technical challenge? Submit your parameters
            below and our engineers will translate them into a deployable
            system.
          </p>
        </div>

        {/* Form: Centered and constrained width */}
        <div className="w-full max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-50 border border-zinc-100 p-8 md:p-12 rounded-[3rem] shadow-sm relative overflow-hidden text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-[10px] font-light uppercase tracking-widest text-zinc-400 ml-4">
                  Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. your name"
                  className="w-full bg-white border border-zinc-100 p-4 rounded-2xl outline-none focus:border-black transition-colors"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-light uppercase tracking-widest text-zinc-400 ml-4">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-white border border-zinc-100 p-4 rounded-2xl outline-none focus:border-black transition-colors"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-[10px] font-light uppercase tracking-widest text-zinc-400 ml-4 text-center block md:text-left">
                Project Parameters
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, type })}
                    className={`p-3 text-[10px] font-bold uppercase tracking-tighter border transition-all rounded-xl ${
                      formData.type === type
                        ? "bg-black text-white border-black"
                        : "bg-white text-zinc-400 border-zinc-100 hover:border-zinc-300"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 mb-10">
              <label className="text-[10px] font-light uppercase tracking-widest text-zinc-400 ml-4">
                Brief Specification
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe the constraints, requirements, and desired outcome..."
                className="w-full bg-white border border-zinc-100 p-4 rounded-2xl outline-none focus:border-black transition-colors resize-none"
                onChange={(e) =>
                  setFormData({ ...formData, desc: e.target.value })
                }
              />
            </div>

            <button
              disabled={status === "submitting"}
              className="w-full bg-black text-white p-6 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all active:scale-95 disabled:opacity-50"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Entry...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Initiate Build Protocol
                </>
              )}
            </button>
          </form>

          <div className="mt-12 flex flex-col items-center gap-4 text-zinc-400 font-mono text-xs">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200"
                />
              ))}
            </div>
            <span>Engineers currently on standby. Protocol version 1.0.4.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
