

namespace hiDNService.API.Service
{
    public class StatisticsService : IHostedService, IDisposable
    {
        private Timer? timer;
        private readonly ILogger<StatisticsService> logger;

        public StatisticsService(ILogger<StatisticsService> logger)
        {
            this.logger = logger;
        }

        public Task StartAsync (CancellationToken cancellationToken)
        {
            timer = new Timer (GetData, null, TimeSpan.Zero, TimeSpan.FromSeconds (5));
            return Task.CompletedTask;
        }

        private void GetData (object? state)
        {
            logger.LogInformation ("Getting data invoked at {time}", DateTime.Now.ToLongTimeString());
        }

        public Task StopAsync (CancellationToken cancellationToken)
        {
            timer?.Change (Timeout.Infinite, 0);
            return Task.CompletedTask;
        }

        public void Dispose ()
        {
            timer?.Dispose ();
            GC.SuppressFinalize (this);
        }
    }
}
