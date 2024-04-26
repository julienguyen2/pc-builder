function TotalCost({ build }) {
  const totalCost =
    build.gpuComponent.price +
    build.cpuComponent.price +
    build.caseComponent.price +
    build.mbComponent.price +
    build.psComponent.price +
    build.ramComponent.price +
    build.storageComponent.price;

  // Round the total cost to two decimal places
  const roundedTotalCost = totalCost.toFixed(2);

  return <h3>Total Cost: ${roundedTotalCost}</h3>;
}

export default TotalCost;