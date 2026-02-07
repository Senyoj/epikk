import { Project } from "@/types/project";

export const electricalProjects: Project[] = [
  {
    name: "Smart Microgrid with Autonomous Load Shedding",
    overview:
      "A localized microgrid that intelligently manages power distribution by shedding non-critical loads during peak demand or faults.",
    innovation:
      "Autonomous AI-driven load prioritization ensures critical services stay online without human intervention.",
  },
  {
    name: "AI-Based Power Theft Detection System",
    overview:
      "Monitors electricity consumption patterns to detect abnormal usage that may indicate theft.",
    innovation:
      "Uses machine learning on real-time consumption and voltage data for highly accurate detection, reducing losses significantly.",
  },
  {
    name: "Solid-State Circuit Breaker Design",
    overview:
      "A fast-response circuit breaker using solid-state switches instead of mechanical relays.",
    innovation:
      "Millisecond-level fault isolation with higher reliability and longer lifespan than conventional breakers.",
  },
  {
    name: "Grid-Tied Solar Inverter with MPPT",
    overview:
      "Converts DC from solar panels to AC for the grid while optimizing power extraction.",
    innovation:
      "Implements adaptive Maximum Power Point Tracking (MPPT) algorithms that respond to shading and weather changes for maximum efficiency.",
  },
  {
    name: "Predictive Transformer Failure Detection",
    overview:
      "Analyzes transformer sensor data to predict failures before they happen.",
    innovation:
      "Combines thermal, vibration, and acoustic signals with AI for early warning and maintenance scheduling.",
  },
  {
    name: "Power Quality Monitoring & Harmonic Compensation",
    overview:
      "Monitors and corrects voltage and current distortions in power networks.",
    innovation:
      "Real-time adaptive filters that compensate harmonics dynamically, improving energy efficiency and reducing equipment stress.",
  },
  {
    name: "EV Fast-Charging Station with Load Balancing",
    overview:
      "High-speed EV charging station capable of handling multiple vehicles simultaneously.",
    innovation:
      "Dynamic load balancing ensures stable supply without overloading the grid, integrating renewable energy where available.",
  },
  {
    name: "Smart Energy Meter with Dynamic Tariffs",
    overview:
      "Monitors household or industrial energy consumption and applies time-of-use tariffs.",
    innovation:
      "AI-driven prediction of consumption patterns enables cost savings and peak demand reduction.",
  },
  {
    name: "Wireless Power Transfer for IoT Devices",
    overview:
      "Transmits power wirelessly to low-power devices like sensors or wearables.",
    innovation:
      "Dynamic alignment and frequency adaptation improve efficiency over existing wireless charging setups.",
  },
  {
    name: "Self-Healing Distribution Network Prototype",
    overview:
      "A power distribution system that automatically isolates faults and reroutes electricity.",
    innovation:
      "Integrates IoT sensors and automated switches to restore power within seconds without manual intervention.",
  },
  {
    name: "Battery Management System with SOC & SOH Estimation",
    overview:
      "Monitors battery state-of-charge (SOC) and state-of-health (SOH) for reliable operation.",
    innovation:
      "Uses AI estimation techniques to improve accuracy for Li-ion batteries, extending lifetime and safety.",
  },
  {
    name: "Smart Street Lighting with Fault Analytics",
    overview:
      "Street lights that monitor themselves and report failures automatically.",
    innovation:
      "Predictive maintenance using sensor data reduces downtime and operational costs.",
  },
  {
    name: "Hybrid Renewable Controller (Solar + Wind + Storage)",
    overview:
      "Manages energy flow between multiple renewable sources and energy storage.",
    innovation:
      "AI-driven control ensures maximum utilization of renewable generation while maintaining grid stability.",
  },
  {
    name: "Real-Time Fault Detection in Transmission Lines",
    overview: "Monitors high-voltage lines to detect faults instantly.",
    innovation:
      "Uses edge computing and sensor fusion for sub-second detection, reducing outage time dramatically.",
  },
  {
    name: "AI-Controlled Power Factor Correction System",
    overview: "Automatically adjusts reactive power to improve power factor.",
    innovation:
      "Machine learning predicts load variations, maintaining optimal power factor dynamically.",
  },
  {
    name: "Intelligent Substation Monitoring System",
    overview:
      "Monitors substation health, including equipment status and environmental conditions.",
    innovation:
      "Predictive analytics detects anomalies before failures, improving reliability and reducing maintenance costs.",
  },
  {
    name: "Smart Generator Synchronization System",
    overview:
      "Automatically synchronizes multiple generators before connecting to the grid.",
    innovation:
      "Real-time voltage, phase, and frequency matching with minimal human input increases safety and uptime.",
  },
  {
    name: "DC Microgrid for Off-Grid Communities",
    overview: "Small-scale DC power grid for remote areas.",
    innovation:
      "Integrates solar, battery, and micro-turbine sources with smart load management for continuous supply.",
  },
  {
    name: "Smart Surge Protection System",
    overview:
      "Protects devices from voltage spikes using intelligent surge detection.",
    innovation:
      "Predictive surge sensing and isolation prevents damage before voltage exceeds thresholds.",
  },
  {
    name: "Energy Harvesting from Vibrations",
    overview:
      "Converts mechanical vibrations into electrical energy for low-power devices.",
    innovation:
      "Adaptive circuitry maximizes energy capture from irregular vibrations in industrial or urban environments.",
  },
  {
    name: "Load Forecasting System for Utilities",
    overview:
      "Predicts electricity demand to optimize generation and distribution.",
    innovation:
      "AI-based multi-factor prediction considers weather, consumption history, and events for higher accuracy.",
  },
  {
    name: "Smart Transformer Tap-Changing System",
    overview:
      "Automatically adjusts transformer voltage taps to maintain stable output.",
    innovation:
      "Intelligent control responds to load changes in real-time without manual intervention.",
  },
  {
    name: "Smart Home Energy Optimization Controller",
    overview: "Monitors and manages energy usage in a home.",
    innovation:
      "AI predicts usage patterns, schedules appliance operation, and reduces peak demand for cost savings.",
  },
  {
    name: "Automatic Islanding Detection System",
    overview:
      "Detects when a distributed generation system is disconnected from the grid.",
    innovation:
      "Fast, accurate detection prevents safety hazards and ensures regulatory compliance.",
  },
  {
    name: "High-Efficiency LED Driver Design",
    overview: "Drives LEDs with maximum efficiency and minimal flicker.",
    innovation:
      "Adaptive current control and thermal management extend LED lifespan and reduce energy waste.",
  },
  {
    name: "Power Electronics-Based UPS System",
    overview: "Uninterruptible power supply using advanced inverters.",
    innovation:
      "Seamless switchover with AI-based load prediction reduces downtime and improves efficiency.",
  },
  {
    name: "Smart Fault Recorder for Power Systems",
    overview: "Records and analyzes faults in the grid.",
    innovation:
      "Edge processing identifies root causes in real-time, speeding up fault recovery.",
  },
  {
    name: "Remote Energy Auditing System",
    overview:
      "Allows utilities or industries to monitor energy usage remotely.",
    innovation:
      "AI-driven recommendations for energy savings without onsite visits.",
  },
  {
    name: "Smart Capacitor Bank Controller",
    overview:
      "Dynamically adjusts reactive power compensation in distribution systems.",
    innovation:
      "AI-based control ensures optimal power factor while minimizing losses.",
  },
  {
    name: "AI-Based Demand Response System",
    overview: "Adjusts loads based on grid conditions.",
    innovation:
      "Predictive AI minimizes peak loads and prevents outages while reducing customer bills.",
  },
  {
    name: "Lightning Detection and Protection System",
    overview: "Detects and protects against lightning strikes.",
    innovation:
      "IoT-enabled predictive protection and real-time alerting improve infrastructure safety.",
  },
  {
    name: "Smart Relay Protection System",
    overview: "Automates relay operation for fault protection.",
    innovation:
      "Machine learning predicts relay trips and optimizes coordination for minimal disruption.",
  },
  {
    name: "Smart Energy Storage Dispatch System",
    overview:
      "Optimizes when batteries charge or discharge to maximize efficiency.",
    innovation:
      "AI predicts demand spikes and renewable generation to intelligently schedule storage usage.",
  },
  {
    name: "Real-Time Power Loss Analysis Tool",
    overview: "Calculates transmission and distribution losses in real-time.",
    innovation:
      "IoT and AI integration provides actionable insights for network optimization.",
  },
  {
    name: "Smart Rural Electrification System",
    overview: "Microgrid solution for rural communities.",
    innovation:
      "Integrates solar, storage, and smart load management to ensure reliable, sustainable power.",
  },
  {
    name: "Embedded Power System Emulator",
    overview:
      "Simulates electrical networks for testing controllers or devices.",
    innovation:
      "Real-time, hardware-in-the-loop simulation allows safe testing of complex systems.",
  },
  {
    name: "IoT-Based Grid Asset Monitoring",
    overview: "Monitors transformers, substations, and lines remotely.",
    innovation:
      "Predictive analytics detects wear or damage early, improving reliability and maintenance scheduling.",
  },
  {
    name: "Smart Voltage Regulation System",
    overview: "Maintains stable voltage across distribution networks.",
    innovation:
      "Adaptive control dynamically adjusts to load and generation fluctuations for improved power quality.",
  },
  {
    name: "AI-Based Load Classification System",
    overview: "Identifies types of loads connected to the grid.",
    innovation:
      "Machine learning distinguishes appliances or equipment in real-time for optimized energy management.",
  },
  {
    name: "Power Line Communication System",
    overview: "Transmits data over existing power lines.",
    innovation:
      "High-speed, low-latency communication enables smart grid integration without extra cabling.",
  },
  {
    name: "Smart Meter Tamper Detection",
    overview: "Detects physical or digital tampering of energy meters.",
    innovation:
      "AI-based anomaly detection prevents fraud and improves revenue protection.",
  },
  {
    name: "Real-Time Energy Trading Platform (Prototype)",
    overview: "Enables peer-to-peer energy trading in a microgrid.",
    innovation:
      "Blockchain + IoT integration allows secure, automated energy exchanges between prosumers.",
  },
  {
    name: "AI-Based Grid Stability Monitoring",
    overview: "Continuously monitors grid parameters to prevent instability.",
    innovation:
      "Predictive AI detects potential blackouts and triggers corrective actions before issues escalate.",
  },
  {
    name: "Solar Tracking System with Predictive Control",
    overview: "Optimizes solar panel orientation for maximum energy capture.",
    innovation:
      "Predictive AI anticipates sun path and weather patterns to improve efficiency beyond traditional trackers.",
  },
  {
    name: "Smart Generator Health Monitoring",
    overview: "Monitors generator parameters to predict failures.",
    innovation:
      "AI-based anomaly detection extends generator lifespan and reduces downtime.",
  },
  {
    name: "Autonomous Power Restoration System",
    overview: "Automatically restores power after outages.",
    innovation:
      "IoT-enabled switches and AI algorithms restore electricity without manual intervention.",
  },
  {
    name: "Smart EV-to-Grid Interface",
    overview: "Allows EVs to feed energy back to the grid.",
    innovation:
      "AI-driven bidirectional charging schedules optimize grid load and battery health.",
  },
  {
    name: "Embedded Power Analyzer",
    overview: "Measures and analyzes power quality in real-time.",
    innovation:
      "Portable, low-cost system with AI analytics provides industrial-grade insights for small setups.",
  },
  {
    name: "AI-Based Renewable Forecasting Tool",
    overview: "Predicts solar and wind generation for better grid management.",
    innovation:
      "Machine learning integrates weather data and historical patterns for highly accurate short- and long-term forecasts.",
  },
  {
    name: "Smart Campus Energy Management System",
    overview: "Monitors and optimizes energy usage across a campus.",
    innovation:
      "AI optimizes energy distribution, peak load, and renewable integration, reducing costs and emissions.",
  },
];
